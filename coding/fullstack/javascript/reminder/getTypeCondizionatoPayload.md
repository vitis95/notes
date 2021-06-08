BASTA FARE QUEL FOTTUTO IF SCHIFOSISSIMO QUESTA è LA SLZ MIGLIORE 

``` javascript 
  getType = () => {
    if(!this.props.value.roles){
      return null
    }
    const payload  = {
      email: UserRegistered.meta.props.email,
      firstName: t.String,
      lastName: t.String,
      roles: UserRegistered.meta.props.roles,
      suspended: t.Boolean,
    }
    if (this.props.value.roles[0] === "BLOGGER") {
      payload.agentCode = t.String
    }       
    return t.struct(payload)
  }
```