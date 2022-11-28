import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.create({
        data: {
            firstName: 'Helen',
            lastName: 'Bonnin',
            email: 'helenbonnin@gmail.com',
            password: '$2y$10$1te6M3SljEzXxKCdw4titu3OP5dZN.uZz4irawdloWlECLOiZ/ktC',
            role: 'USER'
        },
    })

    const languages = await prisma.language.createMany({
        data: [
            {
                name: 'English',
                traduction: 'Anglais',
            },
            {   
                name: 'Spanish',
                traduction: 'Espagnol',
            },
        ],
        skipDuplicates: true,
    })

                
    const allLanguages = await prisma.language.findMany()

    const words = await prisma.word.createMany({
        data: [
            {
                name: 'To give up',
                traduction: 'Abandonner',
                languageId: allLanguages[0].id,
                userId: user.id
            },
            {
                name: 'Buenas noches',
                traduction: 'Bonne nuit',
                languageId: allLanguages[1].id,
                userId: user.id
            },
            {
                name: 'Ciao',
                traduction: 'Au revoir',
                languageId: allLanguages[1].id,
                userId: user.id
            },
            {
                name: 'Sleep',
                traduction: 'Dormir',
                languageId: allLanguages[0].id,
                userId: user.id
            },
        ],
        skipDuplicates: true,
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })