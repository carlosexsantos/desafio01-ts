export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    protected addBalance = (value: number): void => {
        this.balance += value
    }

    getBalance = (): number => {
        return this.balance
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.addBalance(value)
            console.log(`Voce depositou R${value}`)
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.hasBalance(value)){
            this.balance -= value
            console.log(`Voce sacou R$${value}`)
        }
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }

    private hasBalance = (value: number): boolean => {
        if (this.balance >= value) {
            return true
        }

        throw new Error('Saldo insuficiente')
    }
}
