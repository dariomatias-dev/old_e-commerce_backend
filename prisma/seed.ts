import prisma from "../src/lib/prisma";

async function run() {
    await prisma.physicalPersonUsers.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.products.deleteMany();
    await prisma.orders.deleteMany();

    await Promise.all([
        prisma.physicalPersonUsers.create({
            data: {
                id: "57e99e52-753e-4da7-8a67-a6286edd2ee4",
                firstName: "John",
                lastName: "Doe",
                dateOfBirth: "1995-09-20T00:00:00.000Z",
                phone: "+55 83 96435-4736",
                cpf: "728.546.062-13",
                rg: "40.616.871-4",
                email: "johndoe@gmail.com",
                state: "Rio de Janeiro",
                city: "Rio de Janeiro",
                address: "Rua das Flores, 789, Bairro Novo",
                cep: "54321-876",
                password: "457453",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "f8a5ded4-9247-44c2-a794-15aa5ff6fda1",
                firstName: "Emily",
                lastName: "Johnson",
                dateOfBirth: "1988-12-03T00:00:00.000Z",
                phone: "+55 21 98765-3324",
                cpf: "557.445.756-34",
                rg: "47.371.113-8",
                email: "emilyjohnson@gmail.com",
                state: "Minas Gerais",
                city: "Belo Horizonte",
                address: "Rua dos Lírios, 123, Bairro Florido",
                cep: "98765-432",
                password: "qwerty123",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "df942326-5cfc-48eb-adc9-ad269d91974e",
                firstName: "Liam",
                lastName: "Brown",
                dateOfBirth: "1993-09-25T00:00:00.000Z",
                phone: "+55 41 92427-3256",
                cpf: "846.636.561-37",
                rg: "48.829.738-2",
                email: "liambrown@gmail.com",
                state: "Paraná",
                city: "Curitiba",
                address: "Rua das Orquídeas, 789, Bairro Jardim",
                cep: "65432-109",
                password: "p@ssw0rd123",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "f0d33f1f-dabe-4389-b16f-fb4e59812456",
                firstName: "Sophia",
                lastName: "Anderson",
                dateOfBirth: "1992-07-10T00:00:00.000Z",
                phone: "+55 11 95255-6362",
                cpf: "587.711.880-37",
                rg: "14.338.418-1",
                email: "sophiaanderson@gmail.com",
                state: "São Paulo",
                city: "São Paulo",
                address: "Avenida das Rosas, 789, Bairro Encantado",
                cep: "54321-876",
                password: "p@ssw0rd",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "f9a88d43-87e0-4330-b4c6-7fa84f117190",
                firstName: "Oliver",
                lastName: "Wilson",
                dateOfBirth: "1994-03-18T00:00:00.000Z",
                phone: "+55 31 93557-5636",
                cpf: "886.847.227-95",
                rg: "30.425.412-5",
                email: "oliverwilson@gmail.com",
                state: "Rio Grande do Sul",
                city: "Porto Alegre",
                address: "Rua das Violetas, 456, Bairro Florido",
                cep: "87654-321",
                password: "ty4hs64w6",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "c024b2c8-41dd-43a7-b366-93fca49ce8e5",
                firstName: "Ava",
                lastName: "Taylor",
                dateOfBirth: "1991-11-08T00:00:00.000Z",
                phone: "+55 51 99078-5663",
                cpf: "345.892.276-81",
                rg: "17.623.851-7",
                email: "avataylor@gmail.com",
                state: "Rio Grande do Sul",
                city: "Porto Alegre",
                address: "Avenida das Tulipas, 456, Bairro Primavera",
                cep: "54321-987",
                password: "jkgv54yy9t",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "2276f35e-0b6b-4e96-8f5e-799c53260e34",
                firstName: "Noah",
                lastName: "Clark",
                dateOfBirth: "1996-06-12T00:00:00.000Z",
                phone: "+55 81 90286-3417",
                cpf: "214.375.213-04",
                rg: "11.231.626-8",
                email: "noahclark@gmail.com",
                state: "Pernambuco",
                city: "Recife",
                address: "Rua das Margaridas, 123, Bairro Jardim",
                cep: "76543-210",
                password: "khgu54yrthj",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "becda7ee-3b62-49af-8349-b01f29336624",
                firstName: "Emma",
                lastName: "Garcia",
                dateOfBirth: "1997-02-15T00:00:00.000Z",
                phone: "+55 61 95654-8793",
                cpf: "149.592.246-49",
                rg: "22.720.791-9",
                email: "emmagarcia@gmail.com",
                state: "Distrito Federal",
                city: "Brasília",
                address: "Avenida das Flores, 123, Bairro Jardim",
                cep: "87654-321",
                password: "g5s4hiy95d86",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "8edfc04b-d884-45eb-b833-81c32d143bc6",
                firstName: "Liam",
                lastName: "Smith",
                dateOfBirth: "1990-08-21T00:00:00.000Z",
                phone: "+55 85 94369-1034",
                cpf: "967.298.765-06",
                rg: "24.865.059-2",
                email: "liamsmith@gmail.com",
                state: "Ceará",
                city: "Fortaleza",
                address: "Rua das Oliveiras, 456, Bairro Nova",
                cep: "54321-987",
                password: "qwerty3278tr",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "5113e130-c020-450d-a232-24f6af372d84",
                firstName: "Olivia",
                lastName: "Davis",
                dateOfBirth: "1989-05-29T00:00:00.000Z",
                phone: "+55 48 95654-4288",
                cpf: "675.127.819-54",
                rg: "38.719.768-0",
                email: "oliviadavis@gmail.com",
                state: "Santa Catarina",
                city: "Florianópolis",
                address: "Avenida dos Jasmins, 789, Bairro Florido",
                cep: "65432-109",
                password: "o3y5gj65",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "11a4a5b3-d36b-4f7b-a26f-0d454f50e405",
                firstName: "Noah",
                lastName: "Wilson",
                dateOfBirth: "1993-12-07T00:00:00.000Z",
                phone: "+55 31 93258-1244",
                cpf: "737.325.657-00",
                rg: "20.164.537-3",
                email: "noahwilson@gmail.com",
                state: "Minas Gerais",
                city: "Belo Horizonte",
                address: "Rua das Azaleias, 123, Bairro Jardins",
                cep: "76543-210",
                password: "4iy86dt6wy",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "765195f4-c29e-41d9-88be-e3f3c04bac5d",
                firstName: "James",
                lastName: "Robinson",
                dateOfBirth: "1995-06-28T00:00:00.000Z",
                phone: "+55 21 95695-4984",
                cpf: "234.235.178-08",
                rg: "41.477.120-5",
                email: "jamesrobinson@gmail.com",
                state: "Rio de Janeiro",
                city: "Rio de Janeiro",
                address: "Rua das Acácias, 123, Bairro Jardim",
                cep: "54321-987",
                password: "235t9il9o9o9",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "36ef110e-100c-4fa8-b609-700df539caf4",
                firstName: "Isabella",
                lastName: "Martinez",
                dateOfBirth: "1994-09-12T00:00:00.000Z",
                phone: "+55 81 93258-4369",
                cpf: "828.455.848-30",
                rg: "18.448.516-2",
                email: "isabellamartinez@gmail.com",
                state: "Pernambuco",
                city: "Recife",
                address: "Avenida dos Girassóis, 456, Bairro Solar",
                cep: "87654-321",
                password: "874tycw5y6e",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "b964ba88-c9e5-48a4-9b27-7d92544c1748",
                firstName: "Mia",
                lastName: "Hernandez",
                dateOfBirth: "1992-03-15T00:00:00.000Z",
                phone: "+55 41 93048-0539",
                cpf: "134.819.582-77",
                rg: "15.051.142-5",
                email: "miahernandez@gmail.com",
                state: "Paraná",
                city: "Curitiba",
                address: "Rua das Rosas, 789, Bairro Florido",
                cep: "65432-109",
                password: "jo9xy8w475j",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "28dd3e7b-6e4e-4f29-8ecf-7045574472a3",
                firstName: "Alexander",
                lastName: "Lopez",
                dateOfBirth: "1991-12-01T00:00:00.000Z",
                phone: "+55 51 90812-3275",
                cpf: "826.126.368-11",
                rg: "21.280.162-4",
                email: "alexanderlopez@gmail.com",
                state: "Rio Grande do Sul",
                city: "Porto Alegre",
                address: "Avenida das Margaridas, 123, Bairro Primavera",
                cep: "76543-210",
                password: "qwertyuiop",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "475cd22c-9d5d-4202-9b95-f2a6040b96dd",
                firstName: "Charlotte",
                lastName: "Gonzalez",
                dateOfBirth: "1993-10-05T00:00:00.000Z",
                phone: "+55 31 96676-1537",
                cpf: "212.963.955-02",
                rg: "12.020.757-6",
                email: "charlottegonzalez@gmail.com",
                state: "Minas Gerais",
                city: "Belo Horizonte",
                address: "Rua das Violetas, 456, Bairro Jardins",
                cep: "98765-432",
                password: "w3x8n9w4664s",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "2bc5ff61-eed1-4076-865b-1884a9f819b9",
                firstName: "Jackson",
                lastName: "Lee",
                dateOfBirth: "1997-09-05T00:00:00.000Z",
                phone: "+55 81 92508-4369",
                cpf: "623.836.663-00",
                rg: "36.971.155-5",
                email: "jacksonlee@gmail.com",
                state: "Pernambuco",
                city: "Recife",
                address: "Rua das Magnólias, 456, Bairro Jardim",
                cep: "87654-321",
                password: "vegd55g7et",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "e82df5d9-1458-43ed-bbe6-9440806e8950",
                firstName: "Ava",
                lastName: "Turner",
                dateOfBirth: "1994-04-12T00:00:00.000Z",
                phone: "+55 48 93259-7367",
                cpf: "678.504.603-32",
                rg: "37.635.815-4",
                email: "avaturner@gmail.com",
                state: "Santa Catarina",
                city: "Florianópolis",
                address: "Avenida das Orquídeas, 789, Bairro Solar",
                cep: "65432-109",
                password: "4rjks84y",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "0901f7e2-f993-4f60-ad97-a6ea912632bd",
                firstName: "William",
                lastName: "Morris",
                dateOfBirth: "1993-11-30T00:00:00.000Z",
                phone: "+55 51 93298-3684",
                cpf: "266.486.975-20",
                rg: "23.307.029-1",
                email: "williammorris@gmail.com",
                state: "Rio Grande do Sul",
                city: "Porto Alegre",
                address: "Rua das Tulipas, 123, Bairro Primavera",
                cep: "76543-210",
                password: "qw6shrtyo92rr",
                termsOfUse: true,
                receiveMessages: false,
            },
        }),
        prisma.physicalPersonUsers.create({
            data: {
                id: "c5d65cfa-e2fb-4d43-a550-46a29bcce265",
                firstName: "Olivia",
                lastName: "Wilson",
                dateOfBirth: "1995-03-18T00:00:00.000Z",
                phone: "+55 31 97825-6356",
                cpf: "295.652.737-18",
                rg: "29.387.982-5",
                email: "oliviawilson@gmail.com",
                state: "Minas Gerais",
                city: "Belo Horizonte",
                address: "Rua das Gérberas, 456, Bairro Jardins",
                cep: "98765-432",
                password: "ko93xt85y",
                termsOfUse: true,
                receiveMessages: true,
            },
        }),
    ]);

    await Promise.all([
        prisma.categories.create({
            data: {
                id: "bf565cbb-1f85-49c4-9292-ccff1d2bbe3e",
                name: "Processadores",
                imageUrlId: "52969357690_328aa2ec58_z",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f5f513f6-4172-4a00-87a0-d03d8bae2fa2",
                name: "Placas de Vídeo",
                imageUrlId: "52968986266_ff48945fd0_b",
            },
        }),
        prisma.categories.create({
            data: {
                id: "52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d",
                name: "Placas-mãe",
                imageUrlId: "52968385817_b1b76d3d09",
            },
        }),
        prisma.categories.create({
            data: {
                id: "b3c719dc-18d6-4211-9a95-13b4110e4a3b",
                name: "Memórias RAM",
                imageUrlId: "52969357580_405e4f8f68",
            },
        }),
        prisma.categories.create({
            data: {
                id: "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                name: "Armazenamentos",
                imageUrlId: "52969357500_7eb7553c03",
            },
        }),
        prisma.categories.create({
            data: {
                id: "6b28a626-36aa-46aa-8e00-9751e0540e89",
                name: "HDs",
                imageUrlId: "52969437848_4097c31064_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f1344737-532d-44da-840c-1254d1fd99ca",
                name: "SSDs",
                imageUrlId: "52969357660_dfbde5eb41_z",
            },
        }),
        prisma.categories.create({
            data: {
                id: "4ab735ca-9d1f-4b5f-a9da-651e5880a9b6",
                name: "Fontes de Alimentação",
                imageUrlId: "52969123324_2e8a861e96_n",
            },
        }),
        prisma.categories.create({
            data: {
                id: "8c644e10-75e0-4252-bd26-6da1fd177137",
                name: "Gabinetes",
                imageUrlId: "52969357695_e53cc0273b",
            },
        }),
        prisma.categories.create({
            data: {
                id: "84e97d5d-4bd7-4af5-9fa1-ad87621a53e3",
                name: "Periféricos",
                imageUrlId: "52969357720_f3ec0bcff3",
            },
        }),
        prisma.categories.create({
            data: {
                id: "dd94d285-3475-4252-92ca-2924f74eb56b",
                name: "Monitores",
                imageUrlId: "52968986471_68af05d043_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "93d40b8d-2ddf-4f1d-9db2-7313ea3fb973",
                name: "Cadeiras Gamers",
                imageUrlId: "52969357755_8eac3a953d",
            },
        }),
        prisma.categories.create({
            data: {
                id: "40cf9857-3c65-46a8-8db6-f19266d18771",
                name: "Mousepads",
                imageUrlId: "52969437963_d83e63f63b_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "cb69fa22-6039-4615-a40a-e89d8e977346",
                name: "Teclados",
                imageUrlId: "52969123714_3a21fcb389",
            },
        }),
        prisma.categories.create({
            data: {
                id: "5cec0e14-4493-4199-a543-8e4045ddd086",
                name: "Mouses",
                imageUrlId: "52968385632_f3c73bac03_z",
            },
        }),
        prisma.categories.create({
            data: {
                id: "37b99c6f-3e32-4a52-8b7e-3645aea86c39",
                name: "Headsets",
                imageUrlId: "52968385662_7ed0d452c5_z",
            },
        }),
        prisma.categories.create({
            data: {
                id: "90723760-5bad-4846-98dc-80c7c991fbee",
                name: "Adaptadores",
                imageUrlId: "52969357740_e5cb97807a_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "0094d51c-99c6-44b0-a0da-df22fe108e2f",
                name: "Cabos",
                imageUrlId: "52968986536_6a1e566e5b",
            },
        }),
        prisma.categories.create({
            data: {
                id: "df8fbf53-206e-42e7-9c9a-cae5b7f4b7a7",
                name: "Sistemas Operacionais",
                imageUrlId: "52969357835_1b1e8c7b0e",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f63af00c-46cc-4668-a2b5-defc61526547",
                name: "Antivírus",
                imageUrlId: "52969438043_5b1ed527d6",
            },
        }),
        prisma.categories.create({
            data: {
                id: "290217c9-2691-420d-8d57-c798589555ec",
                name: "Sistemas de Áudio",
                imageUrlId: "52968386112_ee0a1b3987_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "82383954-da5a-470a-998d-a33b27c3c80d",
                name: "Placas de Som",
                imageUrlId: "52970370580_f4dcf739a5",
            },
        }),
        prisma.categories.create({
            data: {
                id: "33fad856-8d86-4049-be75-d75990573a77",
                name: "Alto-falantes",
                imageUrlId: "52969357910_06b43d95f7_w",
            },
        }),
        prisma.categories.create({
            data: {
                id: "da2548a0-d727-4b0c-941a-6e93ad73c007",
                name: "Fones de Ouvido",
                imageUrlId: "52968986586_886b264fc7",
            },
        }),
        prisma.categories.create({
            data: {
                id: "df20aaa1-af4b-4af4-82bd-f80c9cccc0f5",
                name: "Microfones",
                imageUrlId: "52969123724_c6111d6e2b",
            },
        }),
        prisma.categories.create({
            data: {
                id: "7f39ac65-a266-45d0-b773-94d99f5abf49",
                name: "Mesas Gamers",
                imageUrlId: "52968986636_1bab4ddd6d",
            },
        }),
        prisma.categories.create({
            data: {
                id: "c5b3375a-0a1f-4e40-8ba9-3cf0044f4c7c",
                name: "Notebooks",
                imageUrlId: "52968385737_efa0703c65_z",
            },
        }),
        prisma.categories.create({
            data: {
                id: "68bca881-43f2-456d-979e-1892d00f54e1",
                name: "Water Coolers",
                imageUrlId: "52969123274_4298b553e2",
            },
        }),
    ]);

    await Promise.all([
        prisma.products.create({
            data: {
                id: "32bbd300-5398-4837-a26a-fef408e0c5be",
                name: "Processador Intel Core i7-10700K",
                description:
                    "O Processador Intel Core i7-9700K é um poderoso componente de 9ª geração projetado pela Intel para atender às demandas de alto desempenho dos PCs modernos. Com uma arquitetura avançada e velocidades impressionantes, ele oferece uma experiência de processamento excepcional para entusiastas de jogos e profissionais que exigem performance intensiva. O i7-9700K possui 8 núcleos e 8 threads, operando a uma frequência base de 3.6GHz e alcançando até 4.9GHz no modo Turbo Boost. Com recursos como Intel Optane Memory suportado e Intel UHD Graphics 630 integrada, este processador proporciona um desempenho rápido e fluido em jogos, renderização de vídeos, edição de mídia e tarefas multitarefas intensivas. Ele é compatível com soquetes LGA 1151 e requer uma placa-mãe com chipset adequado para aproveitar todo o seu potencial. O Processador Intel Core i7-9700K é a escolha ideal para quem busca desempenho excepcional e capacidade de resposta imediata em seu PC de alto desempenho.",
                price: "2166.66",
                imageUrlIds: [
                    "52974159533_a614b9cd45_w",
                    "52974081865_869d5a360c_w",
                    "52973849659_ae4b658e0a_w",
                ],
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "d0fb1d0d-60d9-41b8-8613-c24eea6abba9",
                name: "RTX 3080 Trinity Zotac",
                description:
                    "A Placa de Vídeo NVIDIA GeForce RTX 3080 é um componente de última geração que oferece um desempenho gráfico excepcional e recursos avançados para entusiastas de jogos e profissionais de criação de conteúdo. Equipada com a tecnologia revolucionária de Ray Tracing da NVIDIA, a RTX 3080 permite uma renderização de imagens realistas em tempo real, com reflexos, sombras e iluminação incrivelmente precisos. Com 8704 núcleos CUDA e 10 GB de memória GDDR6X de alta velocidade, essa placa de vídeo proporciona uma experiência de jogo fluida e imersiva mesmo nos títulos mais exigentes. Além disso, a RTX 3080 suporta recursos avançados, como DLSS (Deep Learning Super Sampling) para melhorias de desempenho e resolução, bem como tecnologias de transmissão e captura de vídeos em alta qualidade. Se você procura o máximo de desempenho gráfico e qualidade visual impressionante, a Placa de Vídeo NVIDIA GeForce RTX 3080 é a escolha perfeita. Aproveite o poder da próxima geração de jogos e experiências visuais incríveis em seu PC.",
                price: "13092.93",
                imageUrlIds: [
                    "52974081855_07ec950da3_n",
                    "52973706976_2d188b9ebe_w",
                    "52973706981_0aa735776a_n",
                    "52973111392_ec50233e9e_n",
                    "52973849689_fc29e13eb1_w",
                    "52973707036_b625643cc5",
                    "52973111422_3c1b116a54_h",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "461764ae-a7e1-4fed-9401-67568e19588a",
                name: "Corsair Vengeance RGB Pro",
                description:
                    "A Memória RAM Corsair Vengeance RGB Pro é um módulo de memória DDR4 projetado para oferecer desempenho excepcional e estilo personalizado ao seu sistema. Com capacidade de aprimorar a velocidade e a capacidade de resposta do seu PC, essa memória RAM é uma escolha ideal para entusiastas de jogos, profissionais de criação de conteúdo e entusiastas de PC em geral. Com a tecnologia DDR4, você desfrutará de taxas de transferência de dados rápidas e maior largura de banda, permitindo que você execute várias tarefas simultaneamente e carregue aplicativos pesados com facilidade. O destaque da Corsair Vengeance RGB Pro é a sua iluminação RGB personalizável, que adiciona um toque de estilo ao seu sistema. Com o software de controle da Corsair, você pode personalizar e sincronizar os efeitos de iluminação com outros componentes do seu PC, criando uma aparência única e impressionante. Além disso, a Vengeance RGB Pro é compatível com perfis de overclocking XMP 2.0, o que permite ajustes rápidos e fáceis para obter o máximo desempenho. Se você busca uma memória RAM confiável, de alto desempenho e com estilo personalizável, a Corsair Vengeance RGB Pro é a escolha perfeita para o seu sistema.",
                price: "258.81",
                imageUrlIds: [
                    "52973707051_da5abeb443_w",
                    "52974081980_fffcc19f07_w",
                    "52974081990_fe5418c64e_w",
                    "52974159693_f6262a44e9_w",
                ],
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "38329235-492e-462a-b3cd-02d4cb0622d7",
                name: "Samsung 970 EVO Plus",
                description:
                    "O SSD Samsung 970 EVO Plus é uma unidade de estado sólido de alta performance, projetada para oferecer velocidades rápidas de leitura e gravação, além de capacidade de armazenamento generosa. Com uma capacidade de 1TB, você terá espaço de sobra para armazenar seus arquivos, jogos e aplicativos de forma rápida e eficiente. A tecnologia avançada de memória NAND 3D da Samsung garante desempenho excepcional e confiabilidade duradoura. Com velocidades de leitura sequencial de até 3.500 MB/s e velocidades de gravação sequencial de até 3.300 MB/s, o SSD 970 EVO Plus oferece tempos de carregamento e transferência de arquivos ultrarrápidos, tornando-o ideal para jogos, edição de vídeo e outras tarefas intensivas em dados. Além disso, o SSD é equipado com recursos avançados de gerenciamento de temperatura e proteção contra sobreaquecimento, garantindo que seu sistema funcione de forma estável mesmo sob cargas de trabalho pesadas. Se você busca desempenho excepcional, capacidade de armazenamento generosa e confiabilidade superior, o SSD Samsung 970 EVO Plus é a escolha perfeita para aprimorar seu sistema de armazenamento.",
                price: "949.95",
                imageUrlIds: [
                    "52973849794_561e25b720_w",
                    "52973849799_7e81c362e6_w",
                    "52974159758_d2d46d2fe2_w",
                    "52973111492_a2c15205fb_w",
                    "52974082070_6f4e434bb7_w",
                    "52974082075_6e8e29c74c_w",
                ],
                categoryIds: [
                    "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                    "f1344737-532d-44da-840c-1254d1fd99ca",
                ],
            },
        }),
        prisma.products.create({
            data: {
                id: "b06b92b2-c505-4bb0-979f-11b2d2bc0cf7",
                name: "Corsair RM750x",
                description:
                    "A Fonte de Alimentação Corsair RM750x é uma escolha confiável para alimentar o seu sistema de forma eficiente e segura. Com capacidade de 750W, ela oferece energia suficiente para alimentar componentes de alto desempenho, como processadores potentes, placas de vídeo avançadas e sistemas de armazenamento exigentes. A Corsair RM750x possui certificação 80 Plus Gold, o que significa que oferece eficiência energética excepcional, reduzindo o desperdício de energia e gerando menos calor. Além disso, a sua modularidade permite que você conecte apenas os cabos necessários, facilitando o gerenciamento de cabos e melhorando o fluxo de ar dentro do gabinete. Com componentes de alta qualidade e proteções avançadas contra sobretensão, sobrecorrente e curto-circuito, essa fonte de alimentação oferece confiabilidade e estabilidade para o seu sistema. Seja você um entusiasta de jogos, um criador de conteúdo ou um usuário exigente, a Fonte de Alimentação Corsair RM750x é uma escolha sólida para garantir a energia necessária para o seu PC funcionar de forma eficiente e segura.",
                price: "1105.75",
                imageUrlIds: [
                    "52974159753_b26df375eb_w",
                    "52973849834_bbbf13d3e5_w",
                    "52973849844_ecc2caf2fc_w",
                    "52974159813_4d4a65612c_w",
                    "52973111567_b66502d5ce_w",
                    "52973849909_c5e53c6f81_w",
                ],
                categoryIds: ["4ab735ca-9d1f-4b5f-a9da-651e5880a9b6"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0cb5c0e5-d95e-410f-a10b-b89a75aacdb3",
                name: "Placa-Mãe Gigabyte Z590 AORUS PRO",
                description:
                    "A Placa-Mãe Gigabyte Z590 AORUS PRO é uma placa-mãe de alta qualidade projetada para os entusiastas de PC que desejam construir um sistema de alto desempenho. Equipada com o chipset Intel Z590, essa placa-mãe oferece suporte para os processadores Intel Core de 11ª geração, proporcionando uma plataforma poderosa e versátil. Com slots PCIe 4.0, você pode aproveitar ao máximo as velocidades de transferência de dados de última geração e conectar placas de vídeo avançadas, SSDs NVMe rápidos e outros dispositivos de alta velocidade. A Z590 AORUS PRO também oferece suporte para memória DDR4 de alta velocidade, permitindo um desempenho excepcional em jogos e tarefas intensivas. Além disso, essa placa-mãe possui recursos avançados, como iluminação RGB personalizável, áudio de alta definição e várias opções de conectividade, incluindo USB 3.2 Gen2 e USB Type-C. Com a Placa-Mãe Gigabyte Z590 AORUS PRO, você pode montar um sistema poderoso e personalizado que atenda às suas necessidades de computação.",
                price: "3380.59",
                imageUrlIds: [
                    "52973707196_3230ac5a95_w",
                    "52974159843_e72eeff8fc_w",
                    "52974082135_594fe4028e_w",
                    "52973707221_28ea048598_w",
                    "52974082140_bb57ef9be4_w",
                ],
                categoryIds: ["52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d"],
            },
        }),
        prisma.products.create({
            data: {
                id: "5d919cc5-2cd6-4b2e-aa04-409f212d6390",
                name: "RX 6700 XT",
                description:
                    "A Placa de Vídeo AMD Radeon RX 6700 XT é uma poderosa placa gráfica projetada para jogadores exigentes e criadores de conteúdo. Equipada com a arquitetura AMD RDNA 2, essa placa de vídeo oferece desempenho de alta qualidade, imagens nítidas e taxas de quadros suaves em jogos modernos. Com 12 GB de memória GDDR6 de alta velocidade e velocidades de clock avançadas, ela oferece um desempenho excepcional em resoluções 1440p e até mesmo em 4K. Além disso, a Radeon RX 6700 XT suporta recursos avançados, como ray tracing e AMD FidelityFX, proporcionando gráficos realistas e imersivos. Com conectividade aprimorada, você pode desfrutar de múltiplos monitores e experiências de jogo envolventes. Seja você um jogador apaixonado ou um criador de conteúdo em busca de desempenho gráfico de ponta, a Placa de Vídeo AMD Radeon RX 6700 XT é uma escolha excelente para impulsionar o seu sistema.",
                price: "3380.59",
                imageUrlIds: [
                    "52974082155_c8a18b7d70",
                    "52974159888_c57d76b7a0",
                    "52973707256_04ec5a2806",
                    "52973111607_2048599894",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0888b281-35b0-4c73-8a33-b8db1d8966c1",
                name: "ASUS ROG Swift PG279Q",
                description:
                    "O Monitor ASUS ROG Swift PG279Q é um monitor de alta qualidade projetado para jogadores e profissionais que buscam uma experiência visual excepcional. Com um painel IPS de 27 polegadas e resolução WQHD (2560x1440), esse monitor oferece imagens nítidas, cores vibrantes e amplo ângulo de visão. Com uma taxa de atualização de 165Hz e tecnologia NVIDIA G-SYNC, você desfrutará de jogos suaves e livres de tearing. Além disso, o monitor possui recursos avançados, como HDR e suporte para ampla gama de cores, proporcionando uma qualidade de imagem impressionante. Com conectividade versátil, incluindo HDMI, DisplayPort e USB, você pode conectar facilmente seus dispositivos. O design elegante e ergonômico, com ajustes de inclinação, rotação e altura, oferece conforto e flexibilidade durante longas sessões de jogo ou trabalho. Seja para jogos imersivos ou trabalho profissional, o Monitor ASUS ROG Swift PG279Q é uma escolha premium para uma experiência visual excepcional.",
                price: "4495.49",
                imageUrlIds: [
                    "52973111612_03fd81fdf9",
                    "52973111617_7e015eb774",
                    "52973111637_7c3e4e2216",
                    "52973849994_756c7e3890",
                ],
                categoryIds: ["dd94d285-3475-4252-92ca-2924f74eb56b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "f0eedf9d-0be5-469b-9ebe-3df46fb65cd5",
                name: "Teclado Mecânico Razer BlackWidow Elite",
                description:
                    "O Teclado Mecânico Razer BlackWidow Elite é um teclado durável e responsivo projetado para jogadores e usuários exigentes. Equipado com switches mecânicos Razer, esse teclado oferece atuação rápida e precisa em cada pressionamento de tecla. Com retroiluminação RGB personalizável e efeitos de iluminação dinâmicos, você pode criar uma aparência única para o seu setup. O BlackWidow Elite também possui teclas programáveis e uma roda de controle multifuncional, proporcionando conveniência e acesso rápido a comandos e macros. Além disso, o teclado possui um apoio de pulso ergonômico magnético, oferecendo conforto durante longas sessões de digitação ou jogos. Com a qualidade de construção robusta da Razer, o Teclado Mecânico Razer BlackWidow Elite é uma escolha confiável para melhorar a sua produtividade e desempenho em jogos.",
                price: "845.99",
                imageUrlIds: [
                    "52973111642_b27a06b28b_w",
                    "52973850019_9e023b9e41_w",
                    "52974082230_4faa6b0cf2",
                    "52973850044_245f01d31e",
                    "52973111682_8737564b4c",
                    "52974082265_538028940c",
                ],
                categoryIds: ["cb69fa22-6039-4615-a40a-e89d8e977346"],
            },
        }),
        prisma.products.create({
            data: {
                id: "f90ab79a-b272-4e19-8980-4dc69a6358ce",
                name: "HyperX Cloud Alpha",
                description:
                    "O Headset HyperX Cloud Alpha é um headset confortável e com qualidade de áudio excepcional para jogadores e entusiastas de música. Com drivers de 50mm personalizados, esse headset oferece som imersivo e preciso, permitindo que você ouça todos os detalhes dos jogos e músicas. O Cloud Alpha apresenta uma estrutura durável em alumínio, oferecendo resistência e conforto para uso prolongado. Além disso, as almofadas auriculares em espuma memory foam proporcionam isolamento acústico e conforto excepcionais. O headset também possui um microfone destacável com cancelamento de ruído, permitindo uma comunicação clara com seus companheiros de equipe. Com compatibilidade multiplataforma e cabo removível, o HyperX Cloud Alpha oferece flexibilidade para uso em PCs, consoles e dispositivos móveis. Seja para jogar, ouvir música ou realizar chamadas, o Headset HyperX Cloud Alpha proporciona uma experiência sonora de alta qualidade.",
                price: "495.99",
                imageUrlIds: [
                    "52973111687_31c9ee4cb6_w",
                    "52974082255_bbc0b70c1a_w",
                    "52974159993_cd7fe5c670_w",
                    "52974159978_dda84f31db_w",
                    "52973707381_458554de4a_w",
                    "52973850069_d301ae8e8c_w",
                    "52974082310_70387a97f1_w",
                ],
                categoryIds: ["37b99c6f-3e32-4a52-8b7e-3645aea86c39"],
            },
        }),
        prisma.products.create({
            data: {
                id: "c720ab84-8a6e-422e-8948-024542914835",
                name: "Logitech G502 HERO",
                description:
                    "O Mouse Gamer Logitech G502 HERO é um mouse de alta precisão projetado para jogadores que buscam desempenho excepcional. Com um sensor óptico avançado HERO 25K, esse mouse oferece rastreamento preciso e sensibilidade ajustável de até 25.000 DPI, proporcionando movimentos suaves e precisos. Com 11 botões programáveis, você pode personalizar e atribuir comandos para um acesso rápido durante os jogos. Além disso, o G502 HERO possui um design ergonômico e ajustável, permitindo que você encontre a posição de uso mais confortável para longas sessões de jogo. Com iluminação RGB personalizável e perfis de configuração salvos na memória interna, você pode personalizar a aparência e as configurações do seu mouse. Seja para jogos de ação intensa ou trabalho exigente, o Mouse Gamer Logitech G502 HERO oferece desempenho e precisão superiores.",
                price: "395.99",
                imageUrlIds: [
                    "52974082325_f2ba1179b1_z",
                    "52973850079_6e81e43494",
                    "52974082330_bb9e40bcc9_z",
                    "52974082355_735bae22e7_z",
                    "52974082375_065a6d06e1_w",
                    "52973707421_40ecf9884e",
                ],
                categoryIds: ["5cec0e14-4493-4199-a543-8e4045ddd086"],
            },
        }),
        prisma.products.create({
            data: {
                id: "cad21368-3bb0-43dc-91e6-8c1b6d675762",
                name: "RAZER ISKUR X",
                description:
                    "A Cadeira Gamer RAZER ISKUR X é uma cadeira ergonômica e confortável projetada para proporcionar suporte adequado durante longas sessões de jogos. Com um design esportivo e materiais de alta qualidade, essa cadeira oferece durabilidade e conforto excepcionais. O encosto ajustável e o apoio de cabeça almofadado proporcionam um suporte adequado para a coluna vertebral, ajudando a reduzir a fadiga e o desconforto. Além disso, os braços ajustáveis e retráteis permitem que você encontre a posição ideal para os seus braços e pulsos. A cadeira também possui rodas de alta resistência que deslizam suavemente em diferentes tipos de superfície. Seja para longas sessões de jogos ou trabalho prolongado, a Cadeira Gamer RAZER ISKUR X oferece conforto e estilo para aprimorar a sua experiência.",
                price: "1699.90",
                imageUrlIds: [
                    "52973850109_6cd4a193f1_w",
                    "52974082370_f4a02ef013_w",
                    "52973850114_8c888aaa73_w",
                    "52974082395_8cabb3acf5_w",
                ],
                categoryIds: ["93d40b8d-2ddf-4f1d-9db2-7313ea3fb973"],
            },
        }),
        prisma.products.create({
            data: {
                id: "29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6",
                name: "Caixa de Som Bluetooth JBL Charge 4",
                description:
                    "A Caixa de Som Bluetooth JBL Charge 4 é uma caixa de som portátil com som poderoso e bateria de longa duração. Com drivers de alta performance e radiadores passivos, essa caixa de som oferece graves profundos e som claro em ambientes internos e externos. Além disso, a Charge 4 possui conectividade Bluetooth, permitindo que você reproduza suas músicas sem fio a partir de dispositivos compatíveis. Com sua bateria de íons de lítio recarregável, a caixa de som oferece até 20 horas de reprodução contínua. A Charge 4 também possui classificação IPX7, sendo resistente à água, o que a torna perfeita para uso ao ar livre e em ambientes úmidos. Seja para festas, viagens ou momentos de lazer, a Caixa de Som Bluetooth JBL Charge 4 oferece um som imersivo e portabilidade conveniente.",
                price: "745.99",
                imageUrlIds: [
                    "52973850144_3540992cb5",
                    "52973850154_9e6755e12c",
                    "52973707481_fc9980837d",
                    "52973850179_e5f48839c4_n",
                ],
                categoryIds: ["82383954-da5a-470a-998d-a33b27c3c80d"],
            },
        }),
        prisma.products.create({
            data: {
                id: "15ca2e66-1d75-44c4-89bb-f509af2b6500",
                name: "AMD Ryzen 7 5800X",
                description:
                    "O Processador AMD Ryzen 7 5800X é um poderoso processador de última geração projetado para oferecer alto desempenho em tarefas exigentes. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock rápidas e capacidade de processamento avançada. Com a arquitetura Zen 3 da AMD, o Ryzen 7 5800X oferece melhorias significativas no desempenho em relação às gerações anteriores. Além disso, o processador conta com tecnologia de desbloqueio de multiplicador, permitindo overclocking para obter ainda mais desempenho. Seja para jogos, edição de vídeo ou renderização 3D, o Processador AMD Ryzen 7 5800X oferece potência e eficiência para atender às demandas dos usuários mais exigentes.",
                price: "2145.99",
                imageUrlIds: [
                    "52974160103_a7e9d4452f_w",
                    "52974160138_4ac5d3c3bd",
                    "52974082415_caab4a3d3b",
                    "52974160143_545a9afc34_w",
                ],
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0c03de01-7719-4403-9021-a330da5934f5",
                name: "Intel Core i9-11900K",
                description:
                    "O Processador Intel Core i9-11900K é um processador de alta performance projetado para entregar desempenho excepcional em todas as tarefas. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock altas e capacidade de resposta rápida. Com a tecnologia Intel Turbo Boost Max 3.0, o i9-11900K aumenta automaticamente a frequência de clock para maximizar o desempenho em cargas de trabalho exigentes. Além disso, o processador possui suporte para memória Intel Optane, proporcionando maior capacidade de armazenamento e velocidades de acesso mais rápidas. Seja para jogos intensos, edição de vídeos em 4K ou criação de conteúdo, o Processador Intel Core i9-11900K oferece o máximo desempenho para os usuários mais exigentes.",
                price: "2995.99",
                imageUrlIds: [
                    "52973111837_09e2ab7de2_n",
                    "52974160148_bfb2eb5204_w",
                    "52973111842_9b9accc113_n",
                ],
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "59485b51-cb15-4d03-810b-4afad21fb81a",
                name: "AMD Ryzen 5 5600X",
                description:
                    "O Processador AMD Ryzen 5 5600X é uma opção de alto desempenho para usuários que buscam uma combinação de potência e valor. Com 6 núcleos e 12 threads, esse processador oferece velocidades de clock rápidas e capacidade de multitarefa eficiente. Com a arquitetura Zen 3 da AMD, o Ryzen 5 5600X oferece melhorias significativas no desempenho e eficiência energética em relação às gerações anteriores. Além disso, o processador possui suporte para PCIe 4.0, proporcionando velocidades de transferência de dados mais rápidas para dispositivos compatíveis. Seja para jogos, streaming de conteúdo ou tarefas do dia a dia, o Processador AMD Ryzen 5 5600X oferece desempenho confiável e excelente custo-benefício.",
                price: "1395.99",
                imageUrlIds: [
                    "52974082455_12863fee1a_w",
                    "52974160168_ca966c4abe_w",
                    "52973850224_84031babae",
                ],
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "7dde05da-62b3-4254-ab72-1b78863a06e1",
                name: "GIGABYTE RTX 3070 MASTER",
                description:
                    "A Placa de Vídeo GIGABYTE RTX 3070 MASTER é uma poderosa placa de vídeo da geração Ampere projetada para oferecer desempenho excepcional em jogos e aplicações de renderização. Com 8 GB de memória GDDR6, essa placa de vídeo oferece imagens de alta qualidade e fluidez em resoluções de até 4K. Além disso, a GeForce RTX 3070 possui tecnologia Ray Tracing em tempo real, que proporciona efeitos visuais realistas e iluminação avançada nos jogos compatíveis. Com suporte a DLSS (Deep Learning Super Sampling), a placa de vídeo também melhora o desempenho e a qualidade gráfica. Seja para jogar os títulos mais recentes ou trabalhar com renderização de alta qualidade, a Placa de Vídeo NVIDIA GeForce RTX 3070 oferece o poder necessário para uma experiência imersiva.",
                price: "4727.13",
                imageUrlIds: [
                    "52973707551_21818f71a2_w",
                    "52973707556_b5dbeaea40_w",
                    "52974160198_faf1059d4c_n",
                    "52973111927_5f3e069f02_w",
                    "52974082510_c96724e70f_n",
                    "52973111932_1c52741b91_w",
                    "52973707561_d35a172c4d_n",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "ecf2ee55-407b-4ddd-85dd-bf4c82b812a1",
                name: "Radeon RX 6700 XT",
                description:
                    "A Placa de Vídeo AMD Radeon RX 6700 XT é uma placa de vídeo de alta performance projetada para oferecer jogabilidade suave e gráficos impressionantes. Com 12 GB de memória GDDR6, essa placa de vídeo oferece desempenho excepcional em resoluções 1440p e suporte para jogos em 4K. Com a arquitetura RDNA 2 da AMD, a Radeon RX 6700 XT proporciona altas taxas de quadros e recursos avançados, como sombreamento de taxa variável e redução de latência AMD Radeon Anti-Lag. Além disso, a placa de vídeo oferece suporte a tecnologia AMD Smart Access Memory para melhorar o desempenho em jogos quando combinada com processadores AMD Ryzen compatíveis. Seja para jogar os últimos lançamentos ou criar conteúdo em alta resolução, a Placa de Vídeo AMD Radeon RX 6700 XT oferece uma experiência imersiva e envolvente.",
                price: "2745.99",
                imageUrlIds: [
                    "52973850274_b7e995252f_w",
                    "52974160238_4e0baf4468_w",
                    "52973111947_b1c2888a67_w",
                    "52973111952_936b999f70_w",
                    "52974082560_f03c62305b_w",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "3fac17d5-383f-43fc-a5bd-ae1f780c4d51",
                name: "MSI GTX 1660 Super",
                description:
                    "A Placa de Vídeo NVIDIA GeForce GTX 1660 Super é uma placa de vídeo de médio porte projetada para oferecer bom desempenho em jogos e aplicações gráficas. Com 6 GB de memória GDDR6, essa placa de vídeo oferece ótima qualidade gráfica em resoluções 1080p e suporte para jogos em 1440p. Com a arquitetura Turing da NVIDIA, a GeForce GTX 1660 Super oferece tecnologias avançadas, como sombreamento adaptável e suporte a G-SYNC, para proporcionar uma experiência de jogo suave e sem rasgos de tela. Seja para jogar os títulos populares ou realizar tarefas de edição de vídeo, a Placa de Vídeo NVIDIA GeForce GTX 1660 Super oferece um bom equilíbrio entre desempenho e custo-benefício.",
                price: "1245.99",
                imageUrlIds: [
                    "52973850274_b7e995252f_w",
                    "52974160333_56ae9f75a7_b",
                    "52973850384_85aecac5e0_b",
                    "52973850379_7807b0e60a_b",
                    "52973112087_23abc29537_b",
                    "52973707741_1866389b04_b",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "e37865ec-bdbf-4439-9a62-7046a9a8edd4",
                name: "RTX 4090 Gigabyte Aorus Xtreme Waterforce",
                description:
                    "A RTX 4090 Gigabyte Aorus Xtreme Waterforce é uma placa de vídeo avançada e poderosa, projetada para jogos intensivos. Com refrigeração líquida integrada, oferece desempenho estável e silencioso. Suporta Ray Tracing, DLSS e possui grande capacidade de memória de vídeo. Com recursos de overclocking e software de controle fácil de usar, é uma escolha impressionante para entusiastas de PC que desejam gráficos incríveis e desempenho excepcional.",
                price: "20009.99",
                imageUrlIds: [
                    "52974390510_1f78de1cf3",
                    "52974470353_85cb749ed3_w",
                    "52974161639_07b8381c60_w",
                    "52973421892_2ca7691745_w",
                    "52974390515_421b44c2c4_w",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "95ca78c7-5fc8-4c43-9f0b-1e17e967507d",
                name: "RTX 4090 Gigabyte Aorus Master",
                description:
                    "A Placa gráfica Gigabyte Aorus Geforce RTX 4090 Master é uma potente placa de vídeo projetada para gamers e criadores de conteúdo. Com tecnologia avançada, como Ray Tracing em tempo real e ampla capacidade de memória, ela oferece gráficos incríveis e alto desempenho. Com um sistema de resfriamento eficiente e recursos adicionais, é a escolha ideal para uma experiência de jogo e criação de conteúdo excepcionais.",
                price: "18016.13",
                imageUrlIds: [
                    "52974161569_cac43d50cd_w",
                    "52974470273_4d6dd813b8_w",
                    "52974016816_641004206f_w",
                    "52974016821_8d756e961d",
                    "52974470303_51f8aa2ae3_w",
                    "52973421847_2076229403_w",
                    "52974470343_8d0c1c3d46_n",
                ],
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "de56e7c2-dc7d-4d56-a82d-5b0b39b7beb9",
                name: "Water Cooler Corsair H60 Hydro Series",
                description:
                    "O Water Cooler Corsair H60 Hydro Series é um sistema de refrigeração líquida eficiente para processadores. Com um design compacto e fácil de instalar, ele mantém o processador resfriado durante tarefas exigentes, oferecendo desempenho térmico superior. Com operação silenciosa e capacidade de overclock seguro, é uma excelente opção para manter seu PC fresco e estável.",
                price: "423.52",
                imageUrlIds: [
                    "52974161499_e9e4b98fa9_w",
                    "52974016776_abaeefe7fa_w",
                    "52974016786_190d7c0491_w",
                    "52974470213_87372fc98b_w",
                    "52974390445_01e174a065_w",
                    "52974390465_59c9079e71_w",
                ],
                categoryIds: ["68bca881-43f2-456d-979e-1892d00f54e1"],
            },
        }),
        prisma.products.create({
            data: {
                id: "7ba39abb-26dd-4497-932f-2f5a410e3a72",
                name: "Fonte Asus ROG THOR",
                description:
                    "A Fonte Asus ROG THOR conta com um sistema de resfriamento avançado, que mantém a temperatura interna da fonte controlada mesmo em condições de uso intensivo. Sua construção robusta e componentes de alta qualidade garantem uma durabilidade excepcional, oferecendo uma fonte de alimentação confiável a longo prazo. Com certificação 80 Plus Platinum, proporciona eficiência energética excepcional e reduz o desperdício de energia, resultando em menor impacto ambiental e economia de custos de energia.",
                price: "3529.40",
                imageUrlIds: [
                    "52974470128_8771b1107b_w",
                    "52973421682_b3d8602a33_w",
                    "52973421727_7f8890247d_w",
                    "52974161474_06a4581615_w",
                    "52974390360_07eb7693e2_w",
                    "52974470188_44dab99883_w",
                    "52974161489_e4b7d7cf31_w",
                ],
                categoryIds: ["68bca881-43f2-456d-979e-1892d00f54e1"],
            },
        }),
        prisma.products.create({
            data: {
                id: "cb8a659c-be0c-4ff8-90b6-08b06aab92f2",
                name: "Gabinete Cooler Master H500P Mesh",
                description:
                    "O Gabinete Cooler Master H500P Mesh é ideal para entusiastas que buscam um gabinete de alto desempenho e design arrojado. Com sua estrutura robusta e malha de ventilação, mantém os componentes internos resfriados de forma eficiente. É compatível com placas-mãe ATX e oferece várias opções de armazenamento. Possui tampa frontal removível para facilitar a limpeza e manutenção. Com amplo espaço para gerenciamento de cabos e pontos de montagem inteligentes, permite uma montagem organizada. Oferece suporte para iluminação RGB personalizável e possui um visual estético profissional. O H500P Mesh é a escolha perfeita para criar um sistema poderoso e estiloso.",
                price: "1449.99",
                imageUrlIds: [
                    "52974390235_ce79e3d094_w",
                    "52974161384_10562a0e08_n",
                    "52973421662_e45a5da305_w",
                    "52973421667_ab69ee4933_w",
                    "52974161409_a295576c4b_w",
                    "",
                ],
                categoryIds: ["68bca881-43f2-456d-979e-1892d00f54e1"],
            },
        }),
        prisma.products.create({
            data: {
                id: "78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b",
                name: "SSD Kingston A2000 NVMe",
                description:
                    "O SSD Kingston A2000 NVMe é uma solução de armazenamento de alta velocidade que oferece desempenho excepcional para o seu PC. Com capacidade de 500GB, esse SSD utiliza a interface NVMe PCIe Gen 3.0 x4 para proporcionar velocidades de leitura e gravação ultrarrápidas. Além disso, o A2000 é compatível com o protocolo NVMe 1.3 e possui tecnologia de cache SLC para melhorar a eficiência e a durabilidade. Com o suporte para o software de gerenciamento de SSD da Kingston, você pode monitorar e otimizar o desempenho do seu SSD. Seja para jogos, edição de vídeo ou transferência de arquivos pesados, o SSD Kingston A2000 NVMe oferece desempenho confiável e capacidade de resposta rápida para suas necessidades de armazenamento.",
                price: "445.99",
                imageUrlIds: [
                    "52974082635_45368527f4",
                    "52974160423_3b70daa04b_z",
                    "52974160438_13bb0c548b_z",
                    "52974160433_c795a27f9a_z",
                ],
                categoryIds: [
                    "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                    "f1344737-532d-44da-840c-1254d1fd99ca",
                ],
            },
        }),
        prisma.products.create({
            data: {
                id: "94aa82bf-ded3-4e80-90ad-2b445c72ecd8",
                name: "Memória DDR4 XPG Spectrix D50",
                description:
                    "Aumente o desempenho do seu computador gamer com a Memória DDR4 XPG Spectrix D50. Projetada especialmente para jogos intensivos, esta memória RAM oferece velocidades de transferência rápidas e capacidade excepcional para garantir uma experiência de jogo suave e sem interrupções. Compatível com as principais placas-mãe e fácil de instalar, a Memória DDR4 XPG Spectrix D50 é a escolha perfeita para turbinar o seu setup gamer.",
                price: "399.90",
                imageUrlIds: [
                    "52973112127_07188fb6f7_c",
                    "52973707806_49ae44d773_b",
                    "52974082695_40e02e4671_z",
                    "52973707816_fc69e432ca_n",
                    "52974082720_8e49a6133b_w",
                ],
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "c49c2492-8348-4a7c-be29-8ae29e77ae71",
                name: "Memória RAM HyperX Fury",
                description:
                    "Eleve o seu desempenho gamer com a Memória RAM HyperX Fury. Com velocidades impressionantes e capacidade generosa, esta memória RAM oferece tempos de carregamento rápidos e multitarefa eficiente. Projetada para overclocking fácil, a HyperX Fury garante uma experiência de jogo fluida e responsiva. Adicione potência ao seu setup gamer com esta memória RAM de alto desempenho.",
                price: "249.99",
                imageUrlIds: [
                    "52974290808_449bd79c03_w",
                    "52974211345_ca3b73e256_w",
                    "52973981769_2db63f1b36_w",
                    "52973837126_334196d133_w",
                ],
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "b17e220f-e6f7-4005-aeb9-193ab8ceb254",
                name: "Memória DDR4 G.Skill Trident Z Royal",
                description:
                    "Entre no mundo da iluminação personalizada com a Memória DDR4 G.Skill Trident Z Royal. Com uma combinação perfeita de estilo e desempenho, esta memória RAM possui um incrível sistema de iluminação RGB que pode ser sincronizado com outros dispositivos compatíveis. Além disso, oferece velocidades extremas e capacidade avançada para garantir a máxima performance em jogos exigentes. Com a G.Skill Trident Z Royal, você terá um visual impressionante e um desempenho excepcional para tornar o seu PC gamer ainda mais incrível.",
                price: "1359.90",
                imageUrlIds: [
                    "52973112147_9c4dff7579_c",
                    "52973112162_32d2816400_z",
                    "52973707856_c243f9a40a",
                    "52974160488_865ddfe855_z",
                ],
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "63354a45-b32f-4f0b-96f4-b3393c2ac75a",
                name: "HD Seagate Barracuda",
                description:
                    "Obtenha um espaço de armazenamento confiável e de alta capacidade com o HD Seagate Barracuda. Com uma velocidade de rotação de 7200 RPM e interface SATA de última geração, este HD oferece transferências rápidas de dados e é ideal para jogos, armazenamento de mídia e aplicativos de produtividade. Aproveite a confiabilidade e o desempenho duradouro do HD Seagate Barracuda para suprir todas as suas necessidades de armazenamento.",
                price: "349.99",
                imageUrlIds: [
                    "52973112207_b86e3ca4b8_z",
                    "52973707886_87f5e47489",
                    "52973850474_7466f13368_z",
                    "52973850469_70148d8329",
                ],
                categoryIds: [
                    "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                    "6b28a626-36aa-46aa-8e00-9751e0540e89",
                ],
            },
        }),
        prisma.products.create({
            data: {
                id: "1a1bb003-7234-4f51-87a8-b126dffafa79",
                name: "HD Western Digital Blue",
                description:
                    "Desfrute de uma solução de armazenamento confiável com o HD Western Digital Blue. Com uma ampla capacidade de armazenamento e uma interface SATA de alta velocidade, este HD oferece desempenho e durabilidade excepcionais. Projetado para atender às necessidades de armazenamento de dados de jogos, vídeos e aplicativos, o HD Western Digital Blue é a escolha perfeita para usuários que buscam uma solução de armazenamento econômica e confiável.",
                price: "199.99",
                imageUrlIds: [
                    "52974082770_55ba9bd297_n",
                    "52973112252_09657e7522",
                    "52974082785_92c934d4ae",
                ],
                categoryIds: [
                    "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                    "6b28a626-36aa-46aa-8e00-9751e0540e89",
                ],
            },
        }),
        prisma.products.create({
            data: {
                id: "ab0a1c26-3196-4554-8aa2-b29ab153d2b4",
                name: "SSD Crucial MX500",
                description:
                    "Eleve o desempenho do seu sistema com o SSD Crucial MX500. Com velocidades de leitura e gravação impressionantes, este SSD oferece tempos de inicialização rápidos e transferências de dados eficientes. Além disso, sua tecnologia de proteção de dados avançada garante a segurança e integridade dos seus arquivos. Aproveite a confiabilidade e a capacidade generosa do SSD Crucial MX500 para melhorar a velocidade e a capacidade de resposta do seu PC.",
                price: "299.99",
                imageUrlIds: [
                    "52974160558_574cc15981_z",
                    "52973850509_ffe48173eb_m",
                    "52973707971_4c580f06b7_w",
                ],
                categoryIds: [
                    "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                    "f1344737-532d-44da-840c-1254d1fd99ca",
                ],
            },
        }),
    ]);

    await Promise.all([
        prisma.orders.create({
            data: {
                userId: "8ae64846-3e2a-4eec-b0af-d9dbc108833e",
                orderItems: {
                    create: [
                        {
                            productId: "7117ef73-4a0b-450f-9cab-5b5652bce503",
                            quantity: 1,
                            unitPrice: "1395.99",
                        },
                    ],
                },
                totalAmount: "1395.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "aad40577-43ce-4b0d-b845-1c2e1653e338",
                orderItems: {
                    create: [
                        {
                            productId: "c52075b7-482f-4e82-91c1-896002108b96",
                            quantity: 1,
                            unitPrice: "1245.99",
                        },
                        {
                            productId: "8e0694b3-efc7-4654-b8f9-fef45be3417f",
                            quantity: 1,
                            unitPrice: "495.99",
                        },
                    ],
                },
                totalAmount: "1741.98",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "475cd22c-9d5d-4202-9b95-f2a6040b96dd",
                orderItems: {
                    create: [
                        {
                            productId: "1a1bb003-7234-4f51-87a8-b126dffafa79",
                            quantity: 3,
                            unitPrice: "199.99",
                        },
                        {
                            productId: "29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6",
                            quantity: 1,
                            unitPrice: "745.99",
                        },
                        {
                            productId: "461764ae-a7e1-4fed-9401-67568e19588a",
                            quantity: 2,
                            unitPrice: "249.50",
                        },
                    ],
                },
                totalAmount: "3190.90",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "765195f4-c29e-41d9-88be-e3f3c04bac5d",
                orderItems: {
                    create: [
                        {
                            productId: "32bbd300-5398-4837-a26a-fef408e0c5be",
                            quantity: 1,
                            unitPrice: "7495.99",
                        },
                        {
                            productId: "5d919cc5-2cd6-4b2e-aa04-409f212d6390",
                            quantity: 1,
                            unitPrice: "3495.99",
                        },
                    ],
                },
                totalAmount: "10991.98",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "c5d65cfa-e2fb-4d43-a550-46a29bcce265",
                orderItems: {
                    create: [
                        {
                            productId: "59485b51-cb15-4d03-810b-4afad21fb81a",
                            quantity: 1,
                            unitPrice: "1395.99",
                        },
                        {
                            productId: "63354a45-b32f-4f0b-96f4-b3393c2ac75a",
                            quantity: 2,
                            unitPrice: "349.99",
                        },
                    ],
                },
                totalAmount: "2095.97",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "c024b2c8-41dd-43a7-b366-93fca49ce8e5",
                orderItems: {
                    create: [
                        {
                            productId: "0c03de01-7719-4403-9021-a330da5934f5",
                            quantity: 1,
                            unitPrice: "2995.99",
                        },
                        {
                            productId: "d0fb1d0d-60d9-41b8-8613-c24eea6abba9",
                            quantity: 1,
                            unitPrice: "17495.99",
                        },
                    ],
                },
                totalAmount: "20491.98",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "df942326-5cfc-48eb-adc9-ad269d91974e",
                orderItems: {
                    create: [
                        {
                            productId: "29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6",
                            quantity: 1,
                            unitPrice: "745.99",
                        },
                    ],
                },
                totalAmount: "745.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "475cd22c-9d5d-4202-9b95-f2a6040b96dd",
                orderItems: {
                    create: [
                        {
                            productId: "94aa82bf-ded3-4e80-90ad-2b445c72ecd8",
                            quantity: 4,
                            unitPrice: "399.99",
                        },
                    ],
                },
                totalAmount: "1599.96",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "8edfc04b-d884-45eb-b833-81c32d143bc6",
                orderItems: {
                    create: [
                        {
                            productId: "d0fb1d0d-60d9-41b8-8613-c24eea6abba9",
                            quantity: 1,
                            unitPrice: "17495.99",
                        },
                        {
                            productId: "0888b281-35b0-4c73-8a33-b8db1d8966c1",
                            quantity: 1,
                            unitPrice: "4495.49",
                        },
                        {
                            productId: "38329235-492e-462a-b3cd-02d4cb0622d7",
                            quantity: 3,
                            unitPrice: "949.95",
                        },
                    ],
                },
                totalAmount: "24840.84",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "28dd3e7b-6e4e-4f29-8ecf-7045574472a3",
                orderItems: {
                    create: [
                        {
                            productId: "78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b",
                            quantity: 1,
                            unitPrice: "445.99",
                        },
                    ],
                },
                totalAmount: "445.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "2bc5ff61-eed1-4076-865b-1884a9f819b9",
                orderItems: {
                    create: {
                        productId: "78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b",
                        quantity: 1,
                        unitPrice: "445.99",
                    },
                },
                totalAmount: "445.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "f0d33f1f-dabe-4389-b16f-fb4e59812456",
                orderItems: {
                    create: {
                        productId: "f90ab79a-b272-4e19-8980-4dc69a6358ce",
                        quantity: 1,
                        unitPrice: "495.99",
                    },
                },
                totalAmount: "495.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "0901f7e2-f993-4f60-ad97-a6ea912632bd",
                orderItems: {
                    create: [
                        {
                            productId: "b06b92b2-c505-4bb0-979f-11b2d2bc0cf7",
                            quantity: 1,
                            unitPrice: "895.95",
                        },
                        {
                            productId: "cad21368-3bb0-43dc-91e6-8c1b6d675762",
                            quantity: 1,
                            unitPrice: "1495.99",
                        },
                    ],
                },
                totalAmount: "2391.94",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "11a4a5b3-d36b-4f7b-a26f-0d454f50e405",
                orderItems: {
                    create: {
                        productId: "1a1bb003-7234-4f51-87a8-b126dffafa79",
                        quantity: 2,
                        unitPrice: "199.99",
                    },
                },
                totalAmount: "199.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "2276f35e-0b6b-4e96-8f5e-799c53260e34",
                orderItems: {
                    create: [
                        {
                            productId: "461764ae-a7e1-4fed-9401-67568e19588a",
                            quantity: 2,
                            unitPrice: "249.50",
                        },
                        {
                            productId: "7dde05da-62b3-4254-ab72-1b78863a06e1",
                            quantity: 1,
                            unitPrice: "3495.99",
                        },
                    ],
                },
                totalAmount: "3994.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "8edfc04b-d884-45eb-b833-81c32d143bc6",
                orderItems: {
                    create: {
                        productId: "c720ab84-8a6e-422e-8948-024542914835",
                        quantity: 1,
                        unitPrice: "395.99",
                    },
                },
                totalAmount: "395.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "36ef110e-100c-4fa8-b609-700df539caf4",
                orderItems: {
                    create: {
                        productId: "f0eedf9d-0be5-469b-9ebe-3df46fb65cd5",
                        quantity: 1,
                        unitPrice: "845.99",
                    },
                },
                totalAmount: "845.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "e82df5d9-1458-43ed-bbe6-9440806e8950",
                orderItems: {
                    create: {
                        productId: "cad21368-3bb0-43dc-91e6-8c1b6d675762",
                        quantity: 1,
                        unitPrice: "1495.99",
                    },
                },
                totalAmount: "1495.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "b964ba88-c9e5-48a4-9b27-7d92544c1748",
                orderItems: {
                    create: {
                        productId: "3fac17d5-383f-43fc-a5bd-ae1f780c4d51",
                        quantity: 1,
                        unitPrice: "1245.99",
                    },
                },
                totalAmount: "1245.99",
            },
        }),
        prisma.orders.create({
            data: {
                userId: "8edfc04b-d884-45eb-b833-81c32d143bc6",
                orderItems: {
                    create: {
                        productId: "59485b51-cb15-4d03-810b-4afad21fb81a",
                        quantity: 1,
                        unitPrice: "1395.99",
                    },
                },
                totalAmount: "1395.99",
            },
        }),
    ]);

    await Promise.all([
        prisma.wishlists.create({
            data: {
                userId: "57e99e52-753e-4da7-8a67-a6286edd2ee4",
                productIds: [],
            },
        }),
        prisma.wishlists.create({
            data: {
                userId: "f8a5ded4-9247-44c2-a794-15aa5ff6fda1",
                productIds: [],
            },
        }),
    ]);

    await Promise.all([
        prisma.carts.create({
            data: {
                userId: "57e99e52-753e-4da7-8a67-a6286edd2ee4",
                productIds: [],
            },
        }),
        prisma.carts.create({
            data: {
                userId: "f8a5ded4-9247-44c2-a794-15aa5ff6fda1",
                productIds: [],
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
