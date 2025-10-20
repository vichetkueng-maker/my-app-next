export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  image: string
}

export const payment: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
    image: "/avata.jpeg"
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
    image: "/avatar.jpeg"
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
    image: "/avatar.jpeg"
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
    image: "https://c8.alamy.com/comp/JM8A5T/cambodia-angkor-wat-temple-complex-with-the-buddhist-kmer-flag-JM8A5T.jpg"
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
    image: "https://thumbs.dreamstime.com/b/flag-cambodia-featuring-stylized-depiction-angkor-wat-white-against-vibrant-red-blue-background-symbolizing-cambodian-399458727.jpg"
  },
]