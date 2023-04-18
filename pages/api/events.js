export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  res.redirect("http://localhost:3001/v1/randomEvents")


}


