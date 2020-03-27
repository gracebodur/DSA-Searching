import React, {Component} from 'react'

class BinarySearch extends Component {
    constructor(){
        super()
        this.state = {
            result: null
        }
    }

    binarySearch = (array, value, start, end, counter=0) => {
        start = start == null? 0: start;
        end = end == null ? array.length : end;
        
        if (start > end) {
            return -1;
        }
        const index = Math.floor((start + end) / 2);
        const item = array[index];
        // let counter = 0

        console.log(item)
		if (item == value) {
			counter++
            return counter;
        }
        else if (item < value) {
					// counter++
						return  this.binarySearch(array, value, index + 1, end, counter + 1);
        }
        else if (item > value) {
					// counter++
					return 	this.binarySearch(array, value, start, index - 1, counter + 1)
            
        }
        return -1
    };

    // binarySearch = (num, arr) => {
    //     let counter = 0
    //     for(let i =0; i < arr.length; i++) {
    //         counter++
    //         if (num === arr[i]) {
    //             return counter
    //         }
    //     }
    // }

    handleSubmit=(e, arr) => {
        e.preventDefault()
        const value = e.target.input.value
        const newResult = this.binarySearch(value, arr)
        this.setState({
            result: newResult
        })
    }

    render(){
        
        const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
        const binaryArray = array.sort((a, b) => a - b)
        console.log(binaryArray)
        return(
           <div>
						 <h1>Binary Search</h1>
               <form onSubmit={(e) => this.handleSubmit(e, binaryArray)}>
                   <label htmlFor ='binary-search'>
                        Enter a value
                   </label>
                   <input type='number' name='binary-search' id='input'/>
                   <button type='submit'>Submit</button>
               </form>
               <p>{this.state.result ? `It took ${this.state.result} guesses.` : ""}</p>
           </div>
        )
    }
}

export default BinarySearch