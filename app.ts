import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SocialAccount } from './class/SocialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(50)
console.log(companyAccount)
companyAccount.getLoan(100)
console.log(companyAccount)
const socialAccount: SocialAccount = new SocialAccount('Carlos', 30)
console.log(socialAccount)
socialAccount.deposit(100)
