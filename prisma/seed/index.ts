import prisma from "../../src/lib/prisma";

import seedCarts from "./seedCarts";
import seedCategories from "./seedCategories";
import seedLegalPersonUsers from "./seedLegalPersonUsers";
import seedOrders from "./seedOrders";
import seedPhysicalPersonUsers from "./seedPhysicalPersonUsers";
import seedProducts from "./seedProducts";
import seedWishlists from "./seedWishlists";

async function run() {
    await seedPhysicalPersonUsers();
    await seedLegalPersonUsers();
    await seedWishlists();
    await seedCarts();
    await seedCategories();
    await seedProducts();
    await seedOrders();
}

run()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
