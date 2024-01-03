import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const encodePassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (password: string, hash: string): Promise<Boolean> => {
    return await bcrypt.compare(password, hash)
}

export {
    encodePassword,
    comparePassword
}
