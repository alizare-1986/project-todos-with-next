import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPssword = await hash(password, 12);
  return hashedPssword;
}
async function verifyPassword(password,hashedPssword){
    const isValid=await compare(password,hashedPssword)
    return isValid
}
export { hashPassword,verifyPassword };
