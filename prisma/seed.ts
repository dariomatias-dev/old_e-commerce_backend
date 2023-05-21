import prisma from "../src/lib/prisma";

async function run() {
    await prisma.users.deleteMany();
    await prisma.categories.deleteMany();

    await Promise.all([
        prisma.users.create({
            data: {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@gmail.com",
                password: "457453",
                birthdate: "1995-09-20T00:00:00.000Z",
                phone: "+55 83 96435-4736",
                address: "Rua das Flores, 789, Bairro Novo",
                city: "Rio de Janeiro",
                state: "Rio de Janeiro",
                cep: "54321-876",
                country: "Brasil",
              },
        }),
        prisma.users.create({
            data: {
                firstName: "Emily",
                lastName: "Johnson",
                email: "emilyjohnson@gmail.com",
                password: "qwerty123",
                birthdate: "1988-12-03T00:00:00.000Z",
                phone: "+55 21 98765-3324",
                address: "Rua dos Lírios, 123, Bairro Florido",
                city: "Belo Horizonte",
                state: "Minas Gerais",
                cep: "98765-432",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Liam",
                lastName: "Brown",
                email: "liambrown@gmail.com",
                password: "p@ssw0rd123",
                birthdate: "1993-09-25T00:00:00.000Z",
                phone: "+55 41 92427-3256",
                address: "Rua das Orquídeas, 789, Bairro Jardim",
                city: "Curitiba",
                state: "Paraná",
                cep: "65432-109",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Sophia",
                lastName: "Anderson",
                email: "sophiaanderson@gmail.com",
                password: "p@ssw0rd",
                birthdate: "1992-07-10T00:00:00.000Z",
                phone: "+55 11 95255-6362",
                address: "Avenida das Rosas, 789, Bairro Encantado",
                city: "São Paulo",
                state: "São Paulo",
                cep: "54321-876",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Oliver",
                lastName: "Wilson",
                email: "oliverwilson@gmail.com",
                password: "ty4hs64w6",
                birthdate: "1994-03-18T00:00:00.000Z",
                phone: "+55 31 93557-5636",
                address: "Rua das Violetas, 456, Bairro Florido",
                city: "Porto Alegre",
                state: "Rio Grande do Sul",
                cep: "87654-321",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Ava",
                lastName: "Taylor",
                email: "avataylor@gmail.com",
                password: "jkgv54yy9t",
                birthdate: "1991-11-08T00:00:00.000Z",
                phone: "+55 51 99078-5663",
                address: "Avenida das Tulipas, 456, Bairro Primavera",
                city: "Porto Alegre",
                state: "Rio Grande do Sul",
                cep: "54321-987",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Noah",
                lastName: "Clark",
                email: "noahclark@gmail.com",
                password: "khgu54yrthj",
                birthdate: "1996-06-12T00:00:00.000Z",
                phone: "+55 81 90286-3417",
                address: "Rua das Margaridas, 123, Bairro Jardim",
                city: "Recife",
                state: "Pernambuco",
                cep: "76543-210",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Emma",
                lastName: "Garcia",
                email: "emmagarcia@gmail.com",
                password: "g5s4hiy95d86",
                birthdate: "1997-02-15T00:00:00.000Z",
                phone: "+55 61 95654-8793",
                address: "Avenida das Flores, 123, Bairro Jardim",
                city: "Brasília",
                state: "Distrito Federal",
                cep: "87654-321",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Liam",
                lastName: "Smith",
                email: "liamsmith@gmail.com",
                password: "qwerty3278tr",
                birthdate: "1990-08-21T00:00:00.000Z",
                phone: "+55 85 94369-1034",
                address: "Rua das Oliveiras, 456, Bairro Nova",
                city: "Fortaleza",
                state: "Ceará",
                cep: "54321-987",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Olivia",
                lastName: "Davis",
                email: "oliviadavis@gmail.com",
                password: "o3y5gj65",
                birthdate: "1989-05-29T00:00:00.000Z",
                phone: "+55 48 95654-4288",
                address: "Avenida dos Jasmins, 789, Bairro Florido",
                city: "Florianópolis",
                state: "Santa Catarina",
                cep: "65432-109",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Noah",
                lastName: "Wilson",
                email: "noahwilson@gmail.com",
                password: "4iy86dt6wy",
                birthdate: "1993-12-07T00:00:00.000Z",
                phone: "+55 31 93258-1244",
                address: "Rua das Azaleias, 123, Bairro Jardins",
                city: "Belo Horizonte",
                state: "Minas Gerais",
                cep: "76543-210",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "James",
                lastName: "Robinson",
                email: "jamesrobinson@gmail.com",
                password: "235t9il9o9o9",
                birthdate: "1995-06-28T00:00:00.000Z",
                phone: "+55 21 95695-4984",
                address: "Rua das Acácias, 123, Bairro Jardim",
                city: "Rio de Janeiro",
                state: "Rio de Janeiro",
                cep: "54321-987",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Isabella",
                lastName: "Martinez",
                email: "isabellamartinez@gmail.com",
                password: "874tycw5y6e",
                birthdate: "1994-09-12T00:00:00.000Z",
                phone: "+55 81 93258-4369",
                address: "Avenida dos Girassóis, 456, Bairro Solar",
                city: "Recife",
                state: "Pernambuco",
                cep: "87654-321",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Mia",
                lastName: "Hernandez",
                email: "miahernandez@gmail.com",
                password: "jo9xy8w475j",
                birthdate: "1992-03-15T00:00:00.000Z",
                phone: "+55 41 93048-0539",
                address: "Rua das Rosas, 789, Bairro Florido",
                city: "Curitiba",
                state: "Paraná",
                cep: "65432-109",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Alexander",
                lastName: "Lopez",
                email: "alexanderlopez@gmail.com",
                password: "qwertyuiop",
                birthdate: "1991-12-01T00:00:00.000Z",
                phone: "+55 51 90812-3275",
                address: "Avenida das Margaridas, 123, Bairro Primavera",
                city: "Porto Alegre",
                state: "Rio Grande do Sul",
                cep: "76543-210",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Charlotte",
                lastName: "Gonzalez",
                email: "charlottegonzalez@gmail.com",
                password: "w3x8n9w4664s",
                birthdate: "1993-10-05T00:00:00.000Z",
                phone: "+55 31 96676-1537",
                address: "Rua das Violetas, 456, Bairro Jardins",
                city: "Belo Horizonte",
                state: "Minas Gerais",
                cep: "98765-432",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Jackson",
                lastName: "Lee",
                email: "jacksonlee@gmail.com",
                password: "vegd55g7et",
                birthdate: "1997-09-05T00:00:00.000Z",
                phone: "+55 81 92508-4369",
                address: "Rua das Magnólias, 456, Bairro Jardim",
                city: "Recife",
                state: "Pernambuco",
                cep: "87654-321",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Ava",
                lastName: "Turner",
                email: "avaturner@gmail.com",
                password: "4rjks84y",
                birthdate: "1994-04-12T00:00:00.000Z",
                phone: "+55 48 93259-7367",
                address: "Avenida das Orquídeas, 789, Bairro Solar",
                city: "Florianópolis",
                state: "Santa Catarina",
                cep: "65432-109",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "William",
                lastName: "Morris",
                email: "williammorris@gmail.com",
                password: "qw6shrtyo92rr",
                birthdate: "1993-11-30T00:00:00.000Z",
                phone: "+55 51 93298-3684",
                address: "Rua das Tulipas, 123, Bairro Primavera",
                city: "Porto Alegre",
                state: "Rio Grande do Sul",
                cep: "76543-210",
                country: "Brasil",
            },
        }),
        prisma.users.create({
            data: {
                firstName: "Olivia",
                lastName: "Wilson",
                email: "oliviawilson@gmail.com",
                password: "ko93xt85y",
                birthdate: "1995-03-18T00:00:00.000Z",
                phone: "+55 31 97825-6356",
                address: "Rua das Gérberas, 456, Bairro Jardins",
                city: "Belo Horizonte",
                state: "Minas Gerais",
                cep: "98765-432",
                country: "Brasil",
            },
        }),
    ]);

    await Promise.all([
        prisma.categories.create({
            data: {
                name: "Processadores",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Placas de vídeo",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Placas-mãe",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Memórias RAM",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Armazenamento ",
            },
        }),
        prisma.categories.create({
            data: {
                name: "SSDs",
            },
        }),
        prisma.categories.create({
            data: {
                name: "HDs",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Fontes de alimentação",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Gabinetes",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Periféricos",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Monitores",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Cadeiras gamers",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Mousepads",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Teclados",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Mouses",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Headsets",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Adaptadores",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Cabos",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Sistemas operacionais",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Antivírus",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Sistemas de áudio",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Placas de som",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Alto-falantes",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Fones de ouvido",
            },
        }),
        prisma.categories.create({
            data: {
                name: "Microfones",
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
