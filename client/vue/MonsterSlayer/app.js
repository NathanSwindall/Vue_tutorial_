const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max+1) - min) + min)

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLogs: []
        }
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + "%"}
        },
        specialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value){
            if(this.monsterHealth <= 0 && value <= 0){
                return this.winner = "draw"
            }else if(value <= 0){
                return this.winner = 'lost'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                return this.winner = "draw"
            }else if(value <= 0){
                return this.winner = 'won'
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.battlelogs = []
        },
        attackMonster(){
            this.currentRound ++
            const attack = getRandomNumber(5, 12)
            const currentDamage = this.monsterHealth - attack
            this.monsterHealth = currentDamage < 0 ? 0 : currentDamage
            this.addBattleLog('player', 'attack', attack)
            this.attackPlayer()

        },
        attackPlayer(){
            const monsterAttack = getRandomNumber(5, 15)
            const currentDamage = this.playerHealth - monsterAttack
            this.addBattleLog('monster', 'attack', monsterAttack)
            this.playerHealth = currentDamage < 0 ? 0 : currentDamage
        },
        attackSpecialAttack(){
            this.currentRound ++
            const specialAttack= getRandomNumber(10,25)
            const currentDamage = this.monsterHealth - specialAttack
            this.monsterHealth = currentDamage < 0 ? 0 : currentDamage
            this.addBattleLog('palyer', 'special-attack', specialAttack)
            this.attackPlayer()
        },
        healPlayer(){
            this.currentRound++
            const healValue= getRandomNumber(5,20)
            if(healValue + this.playerHealth > 100){
                this.addBattleLog('player', 'heal', healValue)
                return this.playerHealth = 100
            }

            this.playerHealth += healValue
            this.addBattleLog('player', 'heal', healValue)
            this.attackPlayer()
            
        },
        surrender(){
            this.winner = 'lost'
        }, 
        addBattleLog(who, what, value){
            this.battleLogs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
            console.log(this.battleLogs)

        }
    }
});



app.mount("#game");
