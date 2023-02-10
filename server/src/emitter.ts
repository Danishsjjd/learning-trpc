import EventEmitter from "events"

const emitter = new EventEmitter()

const emitterMsg = "logMessage"

emitter.on(emitterMsg, (arg, arg2, arg3) => {
  console.log("it's working", arg, arg2, arg3)
})

emitter.emit(emitterMsg, { name: "admin" }, "args2", "args3")
