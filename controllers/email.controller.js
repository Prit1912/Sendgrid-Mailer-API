import emailService from "../services/email.service";

export async function sendMail(req, res) {
  await emailService.sendMail(req.body);
  res.send("Mail sent successfully");
}
export async function sendMailithAttachment(req, res) {
  await emailService.sendMailithAttachment(req.body);
  res.send("Mail sent successfully");
}
export async function sendMailToMultiplePersonWithCCandBCC(req, res) {
  await emailService.sendMailToMultiplePersonWithCCandBCC(req.body);
  res.send("Mail sent successfully");
}
export async function sendailWithDynamicTemplate(req, res) {
  await emailService.sendailWithDynamicTemplate(req.body);
  res.send("Mail sent successfully");
}
export async function sendMailToMultiplePersonWithDynamicTemplate(req, res) {
  await emailService.sendMailToMultiplePersonWithDynamicTemplate(req.body);
  res.send("Mail sent successfully");
}
