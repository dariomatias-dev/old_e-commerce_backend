import { LegalPersonUsers, PhysicalPersonUsers } from "prisma/prisma-client";
import bcrypt from "bcrypt";

import prisma from "../lib/prisma";

const validateRequestData = async (
    userId: string | null,
    email: string,
    password: string,
    adminPassword: string | undefined
) => {
    const where = userId ? { id: userId } : { email };

    let user: PhysicalPersonUsers | LegalPersonUsers | null;

    user = await prisma.physicalPersonUsers.findUnique({
        where,
    });

    if (user === null) {
        user = await prisma.legalPersonUsers.findUnique({
            where,
        });
    }

    if (!user) {
        return { status: 401, error: "User not found" };
    }

    if (email !== user?.email) {
        return { status: 401, error: "Invalid email" };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return { status: 401, error: "Invalid password" };
    }

    // Check that an administrator password has been passed and that the user has one
    if (adminPassword && ("adminPassword" in user)) {
        const isValidAdminPassword = await bcrypt.compare(
            adminPassword,
            (user as PhysicalPersonUsers).adminPassword!
        );

        if (!isValidAdminPassword) {
            return { status: 401, error: "Invalid admin password" };
        }
    } else if (!adminPassword && (user as PhysicalPersonUsers).adminPassword) {
        return { status: 401, error: "Unauthorized" };
    }

    return null;
};

export default validateRequestData;
