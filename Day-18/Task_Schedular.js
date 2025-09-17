/*
    TODO: Implement a Schedular with concurrency control
    PROBLME: Impelement a TaskSchedular class that run task with a maximum concurrency limit

    let: 
        concurrency(limit):<2> => Parallely only 2 task can run
        
 */

class TaskSchedular {

    constructor(concurrency) {
        this.concurrency = Number(concurrency)
        this.runningTasks = 0
        this.__waitingQueue = []
    }
    
    getNextTask() {
        if (this.runningTasks < this.concurrency && this.__waitingQueue.length > 0) {
            const nextTask = this.__waitingQueue.shift()
            nextTask()
        }
    }

    addTask(task) {
        return new Promise((resolve, reject) => {

            const __taskRunner = async () => {
                this.runningTasks++
                try {
                    const result = await task()
                    console.log(`Result:`,result)
                    resolve(result)
                } catch (error) {
                    console.error(`Task Failed:`, error)
                    reject(error)
                } finally {
                    this.runningTasks--
                    // see if there is any task in waiting Queue
                    // if so, run that
                    this.getNextTask()
                }
            }

            if (this.runningTasks < this.concurrency) {
                __taskRunner()
            } else {
                this.__waitingQueue.push(__taskRunner.bind(this))
            }
        })
    }
}        

const schedular = new TaskSchedular(2)

schedular.addTask(
    () => new Promise((res) => setTimeout(() => res("Task 1"), 5 * 1000))
)
schedular.addTask(
    () => new Promise((res) => setTimeout(() => res("Task 2"), 5 * 1000))
)
schedular.addTask(
    () => new Promise((res) => setTimeout(() => res("Task 3"), 5 * 1000))
)
schedular.addTask(
    () => new Promise((res) => setTimeout(() => res("Task 4"), 5 * 1000))
)