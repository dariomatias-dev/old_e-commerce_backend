import prisma from "../src/lib/prisma";

async function run() {
    await prisma.users.deleteMany();

    await Promise.all([
        prisma.users.create({
            data: {
                fullName: "Dário Matias",
                email: "matiasdario@gmail.com",
                password: "123456",
                phone: "+55 83 98640-4371",
                address: "Areial PB - Brasil",
            },
        }),
        prisma.users.create({
            data: {
                fullName: "Silvia Camargo",
                email: "silviacamargo@gmail.com",
                password: "654321",
                phone: "+55 83 98640-4371",
                address: "Areial PB - Brasil",
            },
        }),
    ]);
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
