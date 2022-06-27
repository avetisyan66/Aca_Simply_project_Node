import { PrismaClient } from "@prisma/client"
import { hashPassword } from "../src/helpers/common.js"

const prisma = new PrismaClient()

async function main() {
  const messages = ["Hello", "Hi", "Barev"]
  const faq = [
    {
      question: "What is Lost & Found?",
      answer:
        "Lost & Found is the search engine for lost and found property. All found items of honest individuals are published on Lost & Found. Together with our community we help to bring lost items back to their rightful owners. Please note that claims will be responded by the finder (organization or individual person). Lost & Found does not physically manage found objects.",
    },
    {
      question: "What is the minimal time taken for the posts to be published on the website?",
      answer:
        "Before publication, the post must be checked by our admins to make sure that it complies with the project rules. After verification, your post will be available to all users. It will take no more than 12 hours.",
    },
    {
      question: "How long will my post remain on the website?",
      answer:
        "Your post is automatically deactivated after 3 months. You will receive an email a week before D-Day and another on the day of deactivation. After this, your post will be automatically removed permanently from the website.",
    },
    {
      question: "What can I do to help increase the chances of finding my item?",
      answer:
        "Please provide detailed, accurate descriptions on the Post Create Form. If possible, gather descriptive information about the item before filling out the form, and be sure to include any identifiable details to help in the search. ",
    },
    {
      question: "I found my item. How do I delete my post?",
      answer: "Once you found or returned the item, sign in to your account to remove your post.",
    },
    {
      question: "How do I prove that I am the owner of an item?",
      answer:
        'First, claim the object by clicking on the button "This item is mine!". Answer a few questions about your item. These will be questions that only the owner can know the answers to and that can be seen and checked. The more information you provide, the easier it is to determine if you are the rightful owner. This will help to get your item back faster.',
    },
    {
      question: "Why do I need question fields in the Post Create Form?",
      answer:
        "These questions will help you find the rightful owner of the item. A user who wants to note that he has found your item or that you have found his/her item will have to answer the questions you have asked. We will inform you about his answers. That will allow you to detect fraudulent claims.",
    },
    {
      question: "How do I claim an item?",
      answer:
        "You can claim your item by directly contacting the person who has posted it. Meanwhile, you can also contact the lost and found networks team.",
    },
    {
      question: "If I don't live close by how will I get my lost property back?",
      answer:
        "It's very simple - once someone contacts you that your property has been found, you will arrange with them to send it to you.",
    },
  ]
  const categories = [
    {
      name: "Others",
    },
    {
      name: "Animal",
    },
    {
      name: "Headphones",
    },
    {
      name: "Phone",
    },
  ]

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.user.upsert({
    where: { email: "brad@gmail.com" },
    update: {},
    create: {
      email: "brad@gmail.com",
      password: await hashPassword("qwerty"),
      name: "Brad",
      surname: "Gibson",
      phone: "+37493-65-65-65",
      is_verified: true,
      posts: {
        create: [
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 1,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 2,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 3,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 2,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 1,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 3,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 1,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Phone",
            description: "Phone",
            address: "Yerevan",
            type: "FIND",
            category_id: 1,
            questions: {
              create: [
                {
                  title: "What is your phone's model?",
                  answers: {
                    create: [
                      {
                        title: "Iphone",
                        status: false,
                      },
                      {
                        title: "Samsung",
                        status: true,
                      },
                      {
                        title: "Xiaomi",
                        status: false,
                      },
                    ],
                  },
                },
                {
                  title: "What color is your phone?",
                  answers: {
                    create: [
                      {
                        title: "Black",
                        status: false,
                      },
                      {
                        title: "White",
                        status: false,
                      },
                      {
                        title: "Red",
                        status: true,
                      },
                      {
                        title: "Blue",
                        status: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.user.upsert({
    where: { email: "ann@gmail.com" },
    update: {},
    create: {
      email: "ann@gmail.com",
      password: await hashPassword("qwerty"),
      name: "Ann",
      surname: "Brown",
      is_verified: true,
      posts: {
        create: {
          name: "Bag",
          description: "Bag",
          address: "Abovyan",
          type: "LOST",
          category_id: 2,
          questions: {
            create: [
              {
                title: "What color is your bag?",
                answers: {
                  create: [
                    {
                      title: "Black",
                      status: true,
                    },
                    {
                      title: "White",
                      status: false,
                    },
                    {
                      title: "Red",
                      status: false,
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  })
  await prisma.user.upsert({
    where: { email: "john@gmail.com" },
    update: {},
    create: {
      email: "john@gmail.com",
      password: await hashPassword("qwerty"),
      name: "John",
      surname: "Smith",
      is_admin: true,
      is_verified: true,
    },
  })
  await prisma.user.upsert({
    where: { email: "martin@gmail.com" },
    update: {},
    create: {
      email: "martin@gmail.com",
      password: await hashPassword("qwerty"),
      name: "Martin",
      surname: "Skrtel",
      is_admin: true,
      is_verified: true,
    },
  })
  await prisma.user.upsert({
    where: { email: "James@gmail.com" },
    update: {},
    create: {
      email: "James@gmail.com",
      password: await hashPassword("qwerty"),
      name: "James",
      surname: "Blunt",
      is_admin: false,
      is_verified: true,
    },
  })

  messages.forEach(async (message) => {
    await prisma.message.create({
      data: {
        text: message,
        from_id: 1,
        to_id: 2,
      },
    })
    await prisma.message.create({
      data: {
        text: message,
        from_id: 2,
        to_id: 1,
      },
    })
    await prisma.message.create({
      data: {
        text: message,
        from_id: 4,
        to_id: 1,
      },
    })
    await prisma.message.create({
      data: {
        text: message,
        from_id: 4,
        to_id: 2,
      },
    })
    await prisma.message.create({
      data: {
        text: message,
        from_id: 4,
        to_id: 3,
      },
    })
    await prisma.message.create({
      data: {
        text: message,
        from_id: 4,
        to_id: 5,
      },
    })
  })
  faq.forEach(async (question) => {
    await prisma.faq.create({
      data: question,
    })
  })

  await prisma.favorite.createMany({
    data: [
      {
        user_id: 1,
        post_id: 1,
      },
      {
        user_id: 1,
        post_id: 2,
      },
      {
        user_id: 2,
        post_id: 1,
      },
      {
        user_id: 2,
        post_id: 3,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
