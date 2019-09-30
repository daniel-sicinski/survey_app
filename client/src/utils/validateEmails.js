export default recipients => {
  const emailsList = recipients.split(",").map(email => email.trim());

  console.log(emailsList);
  for (let email of emailsList) {
    const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
      email
    );
    //   console.log(isValidEmail);
    if (!isValidEmail) {
      return "Some emails are not valid";
    }
  }
  return;
};
