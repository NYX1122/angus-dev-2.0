export default function handler(req, res) {
  const validationRGEX = {
    name: /^([a-zA-Z]{2,20})$/,
    phone: /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/,
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    business: /^([a-zA-Z]{2,50})$/,
  };
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (
    !body.first ||
    !body.last ||
    !body.phone ||
    !body.email ||
    !body.business
  ) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: 'Please fill out all required fields' });
  }

  if (!validationRGEX.name.test(body.first)) {
    return res.status(400).json({ data: 'Please enter a valid first name.' });
  }

  if (!validationRGEX.name.test(body.last)) {
    return res.status(400).json({ data: 'Please enter a valid last name.' });
  }

  if (!validationRGEX.phone.test(body.phone)) {
    return res.status(400).json({
      data: 'Please enter a valid phone number in the following format - "000-000-000"',
    });
  }

  if (!validationRGEX.email.test(body.email)) {
    return res.status(400).json({
      data: 'Please enter a valid email address.',
    });
  }

  if (!validationRGEX.business.test(body.business)) {
    return res.status(400).json({
      data: 'Please enter a valid business name.',
    });
  }
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({
    data: `${body.first} ${body.last} ${body.phone} ${body.email} ${body.business} ${body.message}`,
  });
}
