import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body

    try {
      await prisma.subscriptionEmail.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      })

      return res.status(201).json({
        success: true,
        data: {
          code: 'success',
          message: 'Email added'
        }
      })
    } catch (e) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'error',
          messgae: 'Something went wrong.'
        }
      })
    } finally {
      prisma.$disconnect()
    }
  } else {
    return res.status(404).json({
      success: false,
      error: {
        code: 'not_found',
        messgae: "The requested endpoint isn't supported."
      }
    })
  }
}
