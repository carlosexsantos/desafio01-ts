import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

  getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.addBalance(value)
            console.log(`Voce pegou R${value} emprestado`)
        }
    }
}
