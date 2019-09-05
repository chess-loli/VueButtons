Vue.component('mastermind', {
    props: {
        code: Array,
        
    },
    template: `
    <div class="container">
        <table class="table is-bordered">
            <tbody>
                <tr>
                    <th>Attempt {{attemptNumber}}</th>
                    <td>{{select1here}}</td>
                    <td>{{select2here}}</td>
                    <td>{{select3here}}</td>
                    <td>{{select4here}}</td>
                    <th>pins</th>
                </tr>
                <tr>
                    <th>Code 2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 4</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 6</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 7</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 8</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 9</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 10</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 11</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Code 12</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <select v-model="select1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <select v-model="select2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <select v-model="select3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <select v-model="select4">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <p>{{solution}}<p>
        <button type="submit" @click="checkSolution">check solution</button>
    </div>
    `,
    computed: {
        select1here() {
            this.solution[0] = this.select1
            return this.select1
        },
        select2here() {
            this.solution[1] = this.select2
            return this.select2
        },
        select3here() {
            this.solution[2] = this.select3
            return this.select3
        },
        select4here() {
            this.solution[3] = this.select4
            return this.select4
        }
        
    },
    methods: {
        checkSolution() {
            this.attemptNumber += 1
        },      
    },
    data () {
        return {
            solution: ['', '', '', ''],
            select1: '',
            select2: '',
            select3: '',
            select4: '',
            attemptNumber: 0
        }
    }
})



new Vue({
    el: '#root',
    data: {
        code: [1, 3, 4, 6],
        solution: [],
        
    },
    methods: {
        // makeCode() {
        //     for (var i = 0; i < 4; i++) {
        //         this.code.push(Math.floor(Math.random() * 6) + 1)
        //     }
        // }
    },
})