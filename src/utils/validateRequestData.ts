import bcrypt from "bcrypt";

import prisma from "../lib/prisma";

const validateRequestData = async (
    userId: string | null,
    email: string,
    password: string,
    adminPassword: string | undefined
) => {
    const where = userId ? { id: userId } : { email };

    const user = await prisma.users.findUnique({ where });

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

    console.log(adminPassword);
    console.log(user.adminPassword);

    // Check that an administrator password has been passed and that the user has one
    if (adminPassword && user.adminPassword) {
        const isValidAdminPassword = await bcrypt.compare(
            adminPassword,
            user.adminPassword
        );

        if (!isValidAdminPassword) {
            return { status: 401, error: "Invalid admin password" };
        }
    } else if (!adminPassword && user.adminPassword) {
        return { status: 401, error: "Unauthorized" };
    }

    return null;
};

export default validateRequestData;
