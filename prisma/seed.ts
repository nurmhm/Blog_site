import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  const hashedPassword = bcrypt.hashSync('admin@1234', 10)

  const adminExists = await prisma.user.findUnique({
    where: {
      email: "admin@gmail.com",
    },
  })

  if (!adminExists) {
    await prisma.user.create({
      data: {
        email: "admin@gmail.com",
        password: hashedPassword,
        role: "ADMIN",
      },
    })
    console.log("✅ Admin created successfully")
  } else {
    console.log("ℹ️ Admin already exists")
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
