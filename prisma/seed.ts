import prisma from "../src/lib/prisma";

async function run() {
    await prisma.users.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.products.deleteMany();
    await prisma.orders.deleteMany();

    await Promise.all([
        prisma.users.create({
            data: {
                id: "57e99e52-753e-4da7-8a67-a6286edd2ee4",
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
                id: "f8a5ded4-9247-44c2-a794-15aa5ff6fda1",
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
                id: "df942326-5cfc-48eb-adc9-ad269d91974e",
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
                id: "f0d33f1f-dabe-4389-b16f-fb4e59812456",
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
                id: "f9a88d43-87e0-4330-b4c6-7fa84f117190",
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
                id: "c024b2c8-41dd-43a7-b366-93fca49ce8e5",
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
                id: "2276f35e-0b6b-4e96-8f5e-799c53260e34",
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
                id: "becda7ee-3b62-49af-8349-b01f29336624",
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
                id: "8edfc04b-d884-45eb-b833-81c32d143bc6",
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
                id: "5113e130-c020-450d-a232-24f6af372d84",
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
                id: "11a4a5b3-d36b-4f7b-a26f-0d454f50e405",
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
                id: "765195f4-c29e-41d9-88be-e3f3c04bac5d",
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
                id: "36ef110e-100c-4fa8-b609-700df539caf4",
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
                id: "b964ba88-c9e5-48a4-9b27-7d92544c1748",
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
                id: "28dd3e7b-6e4e-4f29-8ecf-7045574472a3",
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
                id: "475cd22c-9d5d-4202-9b95-f2a6040b96dd",
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
                id: "2bc5ff61-eed1-4076-865b-1884a9f819b9",
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
                id: "e82df5d9-1458-43ed-bbe6-9440806e8950",
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
                id: "0901f7e2-f993-4f60-ad97-a6ea912632bd",
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
                id: "c5d65cfa-e2fb-4d43-a550-46a29bcce265",
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
                id: "bf565cbb-1f85-49c4-9292-ccff1d2bbe3e",
                name: "Processadores",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f5f513f6-4172-4a00-87a0-d03d8bae2fa2",
                name: "Placas de vídeo",
            },
        }),
        prisma.categories.create({
            data: {
                id: "52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d",
                name: "Placas-mãe",
            },
        }),
        prisma.categories.create({
            data: {
                id: "b3c719dc-18d6-4211-9a95-13b4110e4a3b",
                name: "Memórias RAM",
            },
        }),
        prisma.categories.create({
            data: {
                id: "79d9cde8-93d5-4620-87b5-45cce15d80cb",
                name: "Armazenamento ",
            },
        }),
        prisma.categories.create({
            data: {
                id: "6b28a626-36aa-46aa-8e00-9751e0540e89",
                name: "HDs",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f1344737-532d-44da-840c-1254d1fd99ca",
                name: "SSDs",
            },
        }),
        prisma.categories.create({
            data: {
                id: "4ab735ca-9d1f-4b5f-a9da-651e5880a9b6",
                name: "Fontes de alimentação",
            },
        }),
        prisma.categories.create({
            data: {
                id: "8c644e10-75e0-4252-bd26-6da1fd177137",
                name: "Gabinetes",
            },
        }),
        prisma.categories.create({
            data: {
                id: "84e97d5d-4bd7-4af5-9fa1-ad87621a53e3",
                name: "Periféricos",
            },
        }),
        prisma.categories.create({
            data: {
                id: "dd94d285-3475-4252-92ca-2924f74eb56b",
                name: "Monitores",
            },
        }),
        prisma.categories.create({
            data: {
                id: "93d40b8d-2ddf-4f1d-9db2-7313ea3fb973",
                name: "Cadeiras gamers",
            },
        }),
        prisma.categories.create({
            data: {
                id: "40cf9857-3c65-46a8-8db6-f19266d18771",
                name: "Mousepads",
            },
        }),
        prisma.categories.create({
            data: {
                id: "cb69fa22-6039-4615-a40a-e89d8e977346",
                name: "Teclados",
            },
        }),
        prisma.categories.create({
            data: {
                id: "5cec0e14-4493-4199-a543-8e4045ddd086",
                name: "Mouses",
            },
        }),
        prisma.categories.create({
            data: {
                id: "37b99c6f-3e32-4a52-8b7e-3645aea86c39",
                name: "Headsets",
            },
        }),
        prisma.categories.create({
            data: {
                id: "90723760-5bad-4846-98dc-80c7c991fbee",
                name: "Adaptadores",
            },
        }),
        prisma.categories.create({
            data: {
                id: "0094d51c-99c6-44b0-a0da-df22fe108e2f",
                name: "Cabos",
            },
        }),
        prisma.categories.create({
            data: {
                id: "df8fbf53-206e-42e7-9c9a-cae5b7f4b7a7",
                name: "Sistemas operacionais",
            },
        }),
        prisma.categories.create({
            data: {
                id: "f63af00c-46cc-4668-a2b5-defc61526547",
                name: "Antivírus",
            },
        }),
        prisma.categories.create({
            data: {
                id: "290217c9-2691-420d-8d57-c798589555ec",
                name: "Sistemas de áudio",
            },
        }),
        prisma.categories.create({
            data: {
                id: "82383954-da5a-470a-998d-a33b27c3c80d",
                name: "Placas de som",
            },
        }),
        prisma.categories.create({
            data: {
                id: "33fad856-8d86-4049-be75-d75990573a77",
                name: "Alto-falantes",
            },
        }),
        prisma.categories.create({
            data: {
                id: "da2548a0-d727-4b0c-941a-6e93ad73c007",
                name: "Fones de ouvido",
            },
        }),
        prisma.categories.create({
            data: {
                id: "df20aaa1-af4b-4af4-82bd-f80c9cccc0f5",
                name: "Microfones",
            },
        }),
    ]);

    await Promise.all([
        prisma.products.create({
            data: {
                id: "32bbd300-5398-4837-a26a-fef408e0c5be",
                name: "Processador Intel Core i7-9700K",
                description: "O Processador Intel Core i7-9700K é um poderoso componente de 9ª geração projetado pela Intel para atender às demandas de alto desempenho dos PCs modernos. Com uma arquitetura avançada e velocidades impressionantes, ele oferece uma experiência de processamento excepcional para entusiastas de jogos e profissionais que exigem performance intensiva. O i7-9700K possui 8 núcleos e 8 threads, operando a uma frequência base de 3.6GHz e alcançando até 4.9GHz no modo Turbo Boost. Com recursos como Intel Optane Memory suportado e Intel UHD Graphics 630 integrada, este processador proporciona um desempenho rápido e fluido em jogos, renderização de vídeos, edição de mídia e tarefas multitarefas intensivas. Ele é compatível com soquetes LGA 1151 e requer uma placa-mãe com chipset adequado para aproveitar todo o seu potencial. O Processador Intel Core i7-9700K é a escolha ideal para quem busca desempenho excepcional e capacidade de resposta imediata em seu PC de alto desempenho.",
                price: "7495.99",
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "d0fb1d0d-60d9-41b8-8613-c24eea6abba9",
                name: "GeForce RTX 3080",
                description: "A Placa de Vídeo NVIDIA GeForce RTX 3080 é um componente de última geração que oferece um desempenho gráfico excepcional e recursos avançados para entusiastas de jogos e profissionais de criação de conteúdo. Equipada com a tecnologia revolucionária de Ray Tracing da NVIDIA, a RTX 3080 permite uma renderização de imagens realistas em tempo real, com reflexos, sombras e iluminação incrivelmente precisos. Com 8704 núcleos CUDA e 10 GB de memória GDDR6X de alta velocidade, essa placa de vídeo proporciona uma experiência de jogo fluida e imersiva mesmo nos títulos mais exigentes. Além disso, a RTX 3080 suporta recursos avançados, como DLSS (Deep Learning Super Sampling) para melhorias de desempenho e resolução, bem como tecnologias de transmissão e captura de vídeos em alta qualidade. Se você procura o máximo de desempenho gráfico e qualidade visual impressionante, a Placa de Vídeo NVIDIA GeForce RTX 3080 é a escolha perfeita. Aproveite o poder da próxima geração de jogos e experiências visuais incríveis em seu PC.",
                price: "17495.99",
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "461764ae-a7e1-4fed-9401-67568e19588a",
                name: "Corsair Vengeance RGB Pro",
                description: "A Memória RAM Corsair Vengeance RGB Pro é um módulo de memória DDR4 projetado para oferecer desempenho excepcional e estilo personalizado ao seu sistema. Com capacidade de aprimorar a velocidade e a capacidade de resposta do seu PC, essa memória RAM é uma escolha ideal para entusiastas de jogos, profissionais de criação de conteúdo e entusiastas de PC em geral. Com a tecnologia DDR4, você desfrutará de taxas de transferência de dados rápidas e maior largura de banda, permitindo que você execute várias tarefas simultaneamente e carregue aplicativos pesados com facilidade. O destaque da Corsair Vengeance RGB Pro é a sua iluminação RGB personalizável, que adiciona um toque de estilo ao seu sistema. Com o software de controle da Corsair, você pode personalizar e sincronizar os efeitos de iluminação com outros componentes do seu PC, criando uma aparência única e impressionante. Além disso, a Vengeance RGB Pro é compatível com perfis de overclocking XMP 2.0, o que permite ajustes rápidos e fáceis para obter o máximo desempenho. Se você busca uma memória RAM confiável, de alto desempenho e com estilo personalizável, a Corsair Vengeance RGB Pro é a escolha perfeita para o seu sistema.",
                price: "249.50",
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "38329235-492e-462a-b3cd-02d4cb0622d7",
                name: "Samsung 970 EVO Plus",
                description: "O SSD Samsung 970 EVO Plus é uma unidade de estado sólido de alta performance, projetada para oferecer velocidades rápidas de leitura e gravação, além de capacidade de armazenamento generosa. Com uma capacidade de 1TB, você terá espaço de sobra para armazenar seus arquivos, jogos e aplicativos de forma rápida e eficiente. A tecnologia avançada de memória NAND 3D da Samsung garante desempenho excepcional e confiabilidade duradoura. Com velocidades de leitura sequencial de até 3.500 MB/s e velocidades de gravação sequencial de até 3.300 MB/s, o SSD 970 EVO Plus oferece tempos de carregamento e transferência de arquivos ultrarrápidos, tornando-o ideal para jogos, edição de vídeo e outras tarefas intensivas em dados. Além disso, o SSD é equipado com recursos avançados de gerenciamento de temperatura e proteção contra sobreaquecimento, garantindo que seu sistema funcione de forma estável mesmo sob cargas de trabalho pesadas. Se você busca desempenho excepcional, capacidade de armazenamento generosa e confiabilidade superior, o SSD Samsung 970 EVO Plus é a escolha perfeita para aprimorar seu sistema de armazenamento.",
                price: "949.95",
                categoryIds: ["79d9cde8-93d5-4620-87b5-45cce15d80cb", "f1344737-532d-44da-840c-1254d1fd99ca"],
            },
        }),
        prisma.products.create({
            data: {
                id: "b06b92b2-c505-4bb0-979f-11b2d2bc0cf7",
                name: "Corsair RM750x",
                description: "A Fonte de Alimentação Corsair RM750x é uma escolha confiável para alimentar o seu sistema de forma eficiente e segura. Com capacidade de 750W, ela oferece energia suficiente para alimentar componentes de alto desempenho, como processadores potentes, placas de vídeo avançadas e sistemas de armazenamento exigentes. A Corsair RM750x possui certificação 80 Plus Gold, o que significa que oferece eficiência energética excepcional, reduzindo o desperdício de energia e gerando menos calor. Além disso, a sua modularidade permite que você conecte apenas os cabos necessários, facilitando o gerenciamento de cabos e melhorando o fluxo de ar dentro do gabinete. Com componentes de alta qualidade e proteções avançadas contra sobretensão, sobrecorrente e curto-circuito, essa fonte de alimentação oferece confiabilidade e estabilidade para o seu sistema. Seja você um entusiasta de jogos, um criador de conteúdo ou um usuário exigente, a Fonte de Alimentação Corsair RM750x é uma escolha sólida para garantir a energia necessária para o seu PC funcionar de forma eficiente e segura.",
                price: "895.95",
                categoryIds: ["4ab735ca-9d1f-4b5f-a9da-651e5880a9b6"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0cb5c0e5-d95e-410f-a10b-b89a75aacdb3",
                name: "Placa-Mãe Gigabyte Z590 AORUS PRO",
                description: "A Placa-Mãe Gigabyte Z590 AORUS PRO é uma placa-mãe de alta qualidade projetada para os entusiastas de PC que desejam construir um sistema de alto desempenho. Equipada com o chipset Intel Z590, essa placa-mãe oferece suporte para os processadores Intel Core de 11ª geração, proporcionando uma plataforma poderosa e versátil. Com slots PCIe 4.0, você pode aproveitar ao máximo as velocidades de transferência de dados de última geração e conectar placas de vídeo avançadas, SSDs NVMe rápidos e outros dispositivos de alta velocidade. A Z590 AORUS PRO também oferece suporte para memória DDR4 de alta velocidade, permitindo um desempenho excepcional em jogos e tarefas intensivas. Além disso, essa placa-mãe possui recursos avançados, como iluminação RGB personalizável, áudio de alta definição e várias opções de conectividade, incluindo USB 3.2 Gen2 e USB Type-C. Com a Placa-Mãe Gigabyte Z590 AORUS PRO, você pode montar um sistema poderoso e personalizado que atenda às suas necessidades de computação.",
                price: "4499.95",
                categoryIds: ["52ede7e7-4b4a-4ad1-bfd0-a3947be6e50d"],
            },
        }),
        prisma.products.create({
            data: {
                id: "5d919cc5-2cd6-4b2e-aa04-409f212d6390",
                name: "AMD Radeon RX 6700 XT",
                description: "A Placa de Vídeo AMD Radeon RX 6700 XT é uma poderosa placa gráfica projetada para jogadores exigentes e criadores de conteúdo. Equipada com a arquitetura AMD RDNA 2, essa placa de vídeo oferece desempenho de alta qualidade, imagens nítidas e taxas de quadros suaves em jogos modernos. Com 12 GB de memória GDDR6 de alta velocidade e velocidades de clock avançadas, ela oferece um desempenho excepcional em resoluções 1440p e até mesmo em 4K. Além disso, a Radeon RX 6700 XT suporta recursos avançados, como ray tracing e AMD FidelityFX, proporcionando gráficos realistas e imersivos. Com conectividade aprimorada, você pode desfrutar de múltiplos monitores e experiências de jogo envolventes. Seja você um jogador apaixonado ou um criador de conteúdo em busca de desempenho gráfico de ponta, a Placa de Vídeo AMD Radeon RX 6700 XT é uma escolha excelente para impulsionar o seu sistema.",
                price: "3495.99",
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0888b281-35b0-4c73-8a33-b8db1d8966c1",
                name: "ASUS ROG Swift PG279Q",
                description: "O Monitor ASUS ROG Swift PG279Q é um monitor de alta qualidade projetado para jogadores e profissionais que buscam uma experiência visual excepcional. Com um painel IPS de 27 polegadas e resolução WQHD (2560x1440), esse monitor oferece imagens nítidas, cores vibrantes e amplo ângulo de visão. Com uma taxa de atualização de 165Hz e tecnologia NVIDIA G-SYNC, você desfrutará de jogos suaves e livres de tearing. Além disso, o monitor possui recursos avançados, como HDR e suporte para ampla gama de cores, proporcionando uma qualidade de imagem impressionante. Com conectividade versátil, incluindo HDMI, DisplayPort e USB, você pode conectar facilmente seus dispositivos. O design elegante e ergonômico, com ajustes de inclinação, rotação e altura, oferece conforto e flexibilidade durante longas sessões de jogo ou trabalho. Seja para jogos imersivos ou trabalho profissional, o Monitor ASUS ROG Swift PG279Q é uma escolha premium para uma experiência visual excepcional.",
                price: "4495.49",
                categoryIds: ["dd94d285-3475-4252-92ca-2924f74eb56b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "f0eedf9d-0be5-469b-9ebe-3df46fb65cd5",
                name: "Teclado Mecânico Razer BlackWidow Elite",
                description: "O Teclado Mecânico Razer BlackWidow Elite é um teclado durável e responsivo projetado para jogadores e usuários exigentes. Equipado com switches mecânicos Razer, esse teclado oferece atuação rápida e precisa em cada pressionamento de tecla. Com retroiluminação RGB personalizável e efeitos de iluminação dinâmicos, você pode criar uma aparência única para o seu setup. O BlackWidow Elite também possui teclas programáveis e uma roda de controle multifuncional, proporcionando conveniência e acesso rápido a comandos e macros. Além disso, o teclado possui um apoio de pulso ergonômico magnético, oferecendo conforto durante longas sessões de digitação ou jogos. Com a qualidade de construção robusta da Razer, o Teclado Mecânico Razer BlackWidow Elite é uma escolha confiável para melhorar a sua produtividade e desempenho em jogos.",
                price: "845.99",
                categoryIds: ["cb69fa22-6039-4615-a40a-e89d8e977346"],
            },
        }),
        prisma.products.create({
            data: {
                id: "f90ab79a-b272-4e19-8980-4dc69a6358ce",
                name: "HyperX Cloud Alpha",
                description: "O Headset HyperX Cloud Alpha é um headset confortável e com qualidade de áudio excepcional para jogadores e entusiastas de música. Com drivers de 50mm personalizados, esse headset oferece som imersivo e preciso, permitindo que você ouça todos os detalhes dos jogos e músicas. O Cloud Alpha apresenta uma estrutura durável em alumínio, oferecendo resistência e conforto para uso prolongado. Além disso, as almofadas auriculares em espuma memory foam proporcionam isolamento acústico e conforto excepcionais. O headset também possui um microfone destacável com cancelamento de ruído, permitindo uma comunicação clara com seus companheiros de equipe. Com compatibilidade multiplataforma e cabo removível, o HyperX Cloud Alpha oferece flexibilidade para uso em PCs, consoles e dispositivos móveis. Seja para jogar, ouvir música ou realizar chamadas, o Headset HyperX Cloud Alpha proporciona uma experiência sonora de alta qualidade.",
                price: "495.99",
                categoryIds: ["37b99c6f-3e32-4a52-8b7e-3645aea86c39"],
            },
        }),
        prisma.products.create({
            data: {
                id: "c720ab84-8a6e-422e-8948-024542914835",
                name: "Logitech G502 HERO",
                description: "O Mouse Gamer Logitech G502 HERO é um mouse de alta precisão projetado para jogadores que buscam desempenho excepcional. Com um sensor óptico avançado HERO 25K, esse mouse oferece rastreamento preciso e sensibilidade ajustável de até 25.000 DPI, proporcionando movimentos suaves e precisos. Com 11 botões programáveis, você pode personalizar e atribuir comandos para um acesso rápido durante os jogos. Além disso, o G502 HERO possui um design ergonômico e ajustável, permitindo que você encontre a posição de uso mais confortável para longas sessões de jogo. Com iluminação RGB personalizável e perfis de configuração salvos na memória interna, você pode personalizar a aparência e as configurações do seu mouse. Seja para jogos de ação intensa ou trabalho exigente, o Mouse Gamer Logitech G502 HERO oferece desempenho e precisão superiores.",
                price: "395.99",
                categoryIds: ["5cec0e14-4493-4199-a543-8e4045ddd086"],
            },
        }),
        prisma.products.create({
            data: {
                id: "cad21368-3bb0-43dc-91e6-8c1b6d675762",
                name: "DXRacer Formula Series",
                description: "A Cadeira Gamer DXRacer Formula Series é uma cadeira ergonômica e confortável projetada para proporcionar suporte adequado durante longas sessões de jogos. Com um design esportivo e materiais de alta qualidade, essa cadeira oferece durabilidade e conforto excepcionais. O encosto ajustável e o apoio de cabeça almofadado proporcionam um suporte adequado para a coluna vertebral, ajudando a reduzir a fadiga e o desconforto. Além disso, os braços ajustáveis e retráteis permitem que você encontre a posição ideal para os seus braços e pulsos. A cadeira também possui rodas de alta resistência que deslizam suavemente em diferentes tipos de superfície. Seja para longas sessões de jogos ou trabalho prolongado, a Cadeira Gamer DXRacer Formula Series oferece conforto e estilo para aprimorar a sua experiência.",
                price: "1495.99",
                categoryIds: ["93d40b8d-2ddf-4f1d-9db2-7313ea3fb973"],
            },
        }),
        prisma.products.create({
            data: {
                id: "29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6",
                name: "Caixa de Som Bluetooth JBL Charge 4",
                description: "A Caixa de Som Bluetooth JBL Charge 4 é uma caixa de som portátil com som poderoso e bateria de longa duração. Com drivers de alta performance e radiadores passivos, essa caixa de som oferece graves profundos e som claro em ambientes internos e externos. Além disso, a Charge 4 possui conectividade Bluetooth, permitindo que você reproduza suas músicas sem fio a partir de dispositivos compatíveis. Com sua bateria de íons de lítio recarregável, a caixa de som oferece até 20 horas de reprodução contínua. A Charge 4 também possui classificação IPX7, sendo resistente à água, o que a torna perfeita para uso ao ar livre e em ambientes úmidos. Seja para festas, viagens ou momentos de lazer, a Caixa de Som Bluetooth JBL Charge 4 oferece um som imersivo e portabilidade conveniente.",
                price: "745.99",
                categoryIds: ["82383954-da5a-470a-998d-a33b27c3c80d"],
            },
        }),
        prisma.products.create({
            data: {
                id: "15ca2e66-1d75-44c4-89bb-f509af2b6500",
                name: "AMD Ryzen 7 5800X",
                description: "O Processador AMD Ryzen 7 5800X é um poderoso processador de última geração projetado para oferecer alto desempenho em tarefas exigentes. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock rápidas e capacidade de processamento avançada. Com a arquitetura Zen 3 da AMD, o Ryzen 7 5800X oferece melhorias significativas no desempenho em relação às gerações anteriores. Além disso, o processador conta com tecnologia de desbloqueio de multiplicador, permitindo overclocking para obter ainda mais desempenho. Seja para jogos, edição de vídeo ou renderização 3D, o Processador AMD Ryzen 7 5800X oferece potência e eficiência para atender às demandas dos usuários mais exigentes.",
                price: "2145.99",
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "0c03de01-7719-4403-9021-a330da5934f5",
                name: "Intel Core i9-11900K",
                description: "O Processador Intel Core i9-11900K é um processador de alta performance projetado para entregar desempenho excepcional em todas as tarefas. Com 8 núcleos e 16 threads, esse processador oferece velocidades de clock altas e capacidade de resposta rápida. Com a tecnologia Intel Turbo Boost Max 3.0, o i9-11900K aumenta automaticamente a frequência de clock para maximizar o desempenho em cargas de trabalho exigentes. Além disso, o processador possui suporte para memória Intel Optane, proporcionando maior capacidade de armazenamento e velocidades de acesso mais rápidas. Seja para jogos intensos, edição de vídeos em 4K ou criação de conteúdo, o Processador Intel Core i9-11900K oferece o máximo desempenho para os usuários mais exigentes.",
                price: "2995.99",
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "59485b51-cb15-4d03-810b-4afad21fb81a",
                name: "AMD Ryzen 5 5600X",
                description: "O Processador AMD Ryzen 5 5600X é uma opção de alto desempenho para usuários que buscam uma combinação de potência e valor. Com 6 núcleos e 12 threads, esse processador oferece velocidades de clock rápidas e capacidade de multitarefa eficiente. Com a arquitetura Zen 3 da AMD, o Ryzen 5 5600X oferece melhorias significativas no desempenho e eficiência energética em relação às gerações anteriores. Além disso, o processador possui suporte para PCIe 4.0, proporcionando velocidades de transferência de dados mais rápidas para dispositivos compatíveis. Seja para jogos, streaming de conteúdo ou tarefas do dia a dia, o Processador AMD Ryzen 5 5600X oferece desempenho confiável e excelente custo-benefício.",
                price: "1395.99",
                categoryIds: ["bf565cbb-1f85-49c4-9292-ccff1d2bbe3e"],
            },
        }),
        prisma.products.create({
            data: {
                id: "7dde05da-62b3-4254-ab72-1b78863a06e1",
                name: "GeForce RTX 3070",
                description: "A Placa de Vídeo NVIDIA GeForce RTX 3070 é uma poderosa placa de vídeo da geração Ampere projetada para oferecer desempenho excepcional em jogos e aplicações de renderização. Com 8 GB de memória GDDR6, essa placa de vídeo oferece imagens de alta qualidade e fluidez em resoluções de até 4K. Além disso, a GeForce RTX 3070 possui tecnologia Ray Tracing em tempo real, que proporciona efeitos visuais realistas e iluminação avançada nos jogos compatíveis. Com suporte a DLSS (Deep Learning Super Sampling), a placa de vídeo também melhora o desempenho e a qualidade gráfica. Seja para jogar os títulos mais recentes ou trabalhar com renderização de alta qualidade, a Placa de Vídeo NVIDIA GeForce RTX 3070 oferece o poder necessário para uma experiência imersiva.",
                price: "3495.99",
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "ecf2ee55-407b-4ddd-85dd-bf4c82b812a1",
                name: "Radeon RX 6700 XT",
                description: "A Placa de Vídeo AMD Radeon RX 6700 XT é uma placa de vídeo de alta performance projetada para oferecer jogabilidade suave e gráficos impressionantes. Com 12 GB de memória GDDR6, essa placa de vídeo oferece desempenho excepcional em resoluções 1440p e suporte para jogos em 4K. Com a arquitetura RDNA 2 da AMD, a Radeon RX 6700 XT proporciona altas taxas de quadros e recursos avançados, como sombreamento de taxa variável e redução de latência AMD Radeon Anti-Lag. Além disso, a placa de vídeo oferece suporte a tecnologia AMD Smart Access Memory para melhorar o desempenho em jogos quando combinada com processadores AMD Ryzen compatíveis. Seja para jogar os últimos lançamentos ou criar conteúdo em alta resolução, a Placa de Vídeo AMD Radeon RX 6700 XT oferece uma experiência imersiva e envolvente.",
                price: "2745.99",
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "3fac17d5-383f-43fc-a5bd-ae1f780c4d51",
                name: "GeForce GTX 1660 Super",
                description: "A Placa de Vídeo NVIDIA GeForce GTX 1660 Super é uma placa de vídeo de médio porte projetada para oferecer bom desempenho em jogos e aplicações gráficas. Com 6 GB de memória GDDR6, essa placa de vídeo oferece ótima qualidade gráfica em resoluções 1080p e suporte para jogos em 1440p. Com a arquitetura Turing da NVIDIA, a GeForce GTX 1660 Super oferece tecnologias avançadas, como sombreamento adaptável e suporte a G-SYNC, para proporcionar uma experiência de jogo suave e sem rasgos de tela. Seja para jogar os títulos populares ou realizar tarefas de edição de vídeo, a Placa de Vídeo NVIDIA GeForce GTX 1660 Super oferece um bom equilíbrio entre desempenho e custo-benefício.",
                price: "1245.99",
                categoryIds: ["f5f513f6-4172-4a00-87a0-d03d8bae2fa2"],
            },
        }),
        prisma.products.create({
            data: {
                id: "78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b",
                name: "SSD Kingston A2000 NVMe",
                description: "O SSD Kingston A2000 NVMe é uma solução de armazenamento de alta velocidade que oferece desempenho excepcional para o seu PC. Com capacidade de 500GB, esse SSD utiliza a interface NVMe PCIe Gen 3.0 x4 para proporcionar velocidades de leitura e gravação ultrarrápidas. Além disso, o A2000 é compatível com o protocolo NVMe 1.3 e possui tecnologia de cache SLC para melhorar a eficiência e a durabilidade. Com o suporte para o software de gerenciamento de SSD da Kingston, você pode monitorar e otimizar o desempenho do seu SSD. Seja para jogos, edição de vídeo ou transferência de arquivos pesados, o SSD Kingston A2000 NVMe oferece desempenho confiável e capacidade de resposta rápida para suas necessidades de armazenamento.",
                price: "445.99",
                categoryIds: ["79d9cde8-93d5-4620-87b5-45cce15d80cb", "f1344737-532d-44da-840c-1254d1fd99ca"],
            },
        }),
        prisma.products.create({
            data: {
                id: "94aa82bf-ded3-4e80-90ad-2b445c72ecd8",
                name: "Memória RAM Gaming XYZ",
                description: "Aumente o desempenho do seu computador gamer com a Memória RAM Gaming XYZ. Projetada especialmente para jogos intensivos, esta memória RAM oferece velocidades de transferência rápidas e capacidade excepcional para garantir uma experiência de jogo suave e sem interrupções. Compatível com as principais placas-mãe e fácil de instalar, a Memória RAM Gaming XYZ é a escolha perfeita para turbinar o seu setup gamer.",
                price: "399.99",
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            }
        }),
        prisma.products.create({
            data: {
                id: "c49c2492-8348-4a7c-be29-8ae29e77ae71",
                name: "Memória RAM HyperX Fury",
                description: "Eleve o seu desempenho gamer com a Memória RAM HyperX Fury. Com velocidades impressionantes e capacidade generosa, esta memória RAM oferece tempos de carregamento rápidos e multitarefa eficiente. Projetada para overclocking fácil, a HyperX Fury garante uma experiência de jogo fluida e responsiva. Adicione potência ao seu setup gamer com esta memória RAM de alto desempenho.",
                price: "249.99",
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "b17e220f-e6f7-4005-aeb9-193ab8ceb254",
                name: "Memória RAM Corsair Vengeance RGB Pro",
                description: "Entre no mundo da iluminação personalizada com a Memória RAM Corsair Vengeance RGB Pro. Com uma combinação perfeita de estilo e desempenho, esta memória RAM possui um incrível sistema de iluminação RGB que pode ser sincronizado com outros dispositivos compatíveis. Além disso, oferece velocidades extremas e capacidade avançada para garantir a máxima performance em jogos exigentes. Com a Corsair Vengeance RGB Pro, você terá um visual impressionante e um desempenho excepcional para tornar o seu PC gamer ainda mais incrível.",
                price: "299.99",
                categoryIds: ["b3c719dc-18d6-4211-9a95-13b4110e4a3b"],
            },
        }),
        prisma.products.create({
            data: {
                id: "63354a45-b32f-4f0b-96f4-b3393c2ac75a",
                name: "HD Seagate Barracuda",
                description: "Obtenha um espaço de armazenamento confiável e de alta capacidade com o HD Seagate Barracuda. Com uma velocidade de rotação de 7200 RPM e interface SATA de última geração, este HD oferece transferências rápidas de dados e é ideal para jogos, armazenamento de mídia e aplicativos de produtividade. Aproveite a confiabilidade e o desempenho duradouro do HD Seagate Barracuda para suprir todas as suas necessidades de armazenamento.",
                price: "349.99",
                categoryIds: ["79d9cde8-93d5-4620-87b5-45cce15d80cb", "6b28a626-36aa-46aa-8e00-9751e0540e89"],
            },
        }),
        prisma.products.create({
            data: {
                id: "1a1bb003-7234-4f51-87a8-b126dffafa79",
                name: "HD Western Digital Blue",
                description: "Desfrute de uma solução de armazenamento confiável com o HD Western Digital Blue. Com uma ampla capacidade de armazenamento e uma interface SATA de alta velocidade, este HD oferece desempenho e durabilidade excepcionais. Projetado para atender às necessidades de armazenamento de dados de jogos, vídeos e aplicativos, o HD Western Digital Blue é a escolha perfeita para usuários que buscam uma solução de armazenamento econômica e confiável.",
                price: "199.99",
                categoryIds: ["79d9cde8-93d5-4620-87b5-45cce15d80cb", "6b28a626-36aa-46aa-8e00-9751e0540e89"],
            },
        }),
        prisma.products.create({
            data: {
                id: "ab0a1c26-3196-4554-8aa2-b29ab153d2b4",
                name: "SSD Crucial MX500",
                description: "Eleve o desempenho do seu sistema com o SSD Crucial MX500. Com velocidades de leitura e gravação impressionantes, este SSD oferece tempos de inicialização rápidos e transferências de dados eficientes. Além disso, sua tecnologia de proteção de dados avançada garante a segurança e integridade dos seus arquivos. Aproveite a confiabilidade e a capacidade generosa do SSD Crucial MX500 para melhorar a velocidade e a capacidade de resposta do seu PC.",
                price: "299.99",
                categoryIds: ["79d9cde8-93d5-4620-87b5-45cce15d80cb", "f1344737-532d-44da-840c-1254d1fd99ca"],
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
