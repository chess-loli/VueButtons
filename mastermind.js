Vue.component('mastermind', {
    props: {
        code: Array,
        
    },
    template: `
    <div class="container">
        <table class="table is-bordered columns is-centered">
            <tbody>
                <tr v-for="attempt in attempts">
                    <th>Attempt {{attempt[0]}}</th>
                    <td>{{attempt[1][0]}}</td>
                    <td>{{attempt[1][1]}}</td>
                    <td>{{attempt[1][2]}}</td>
                    <td>{{attempt[1][3]}}</td>
                    <th>{{attempt[2]}}</th>
                </tr>
            </tbody>
        </table>
        <select v-model="select1">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
        </select>
        <select v-model="select2">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
        </select>
        <select v-model="select3">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
        </select>
        <select v-model="select4">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
        </select>
        <p>{{solution}}<p>
        <button type="submit" class="button is-primary" @click="checkSolution">check solution</button>
    </div>
    `,
    computed: {
       
        redThing() {
            return 'red'
        },
        whiteThing() {
            return 'white'
        },
        solution() {
            return [this.select1, this.select2, this.select3, this.select4]
        }
        

        
    },
    methods: {
        checkSolution() {
            for (i = 0; i < this.solution.length; i++) {
                if (this.solution[i] === this.code[i]) {
                    this.pins.push(this.redThing)
                } else if (this.solution[i] !== this.code[i] && this.code.includes(this.solution[i])) {
                    this.pins.push(this.whiteThing)
                }
            }
            this.attemptNumber += 1
            if (this.attemptNumber < 13) {
                this.attempts.push([this.attemptNumber, this.solution, this.pins])
            }
            this.pins = []
            if (this.attemptNumber > 12) {
                return alert('you lost this round')
            }
        }, 
        
        
       
    },
    data () {
        return {
            attempts: [],
            select1: '',
            select2: '',
            select3: '',
            select4: '',
            attemptNumber: 0,
            pins: []
        }
    }
})



new Vue({
    el: '#root',
    data: {
        code: [],
        
        
    },
    methods: {
        makeCode() {
            this.code = []
            for (var i = 0; i < 4; i++) {
                this.code.push(Math.floor(Math.random() * 6) + 1)
            }
        }
    },
})