import { DioAccount } from "./DioAccount"

export class SocialAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => super.deposit(value)
}
