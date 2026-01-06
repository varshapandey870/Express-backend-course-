export const login = (req , res) =>{
    //  login simulation  
    const {username} = req.body;
    if(!username){
        res.status(400).json({
            message :"Username is required"
        })
    }
    //storing username inside session 
    req.session.user ={username};
    
    //also store a cookie for the user 
    res.cookie("username",username , {httponlytr:true , maxage: 1000*60*60*24})
    res.status(200).json({
        message :"User loggedin...",
        username :username
    })
};

export const logout = (req , res) => {
    res.clearCookie("username");
    req.session.destroy();
    res.json({
        message :"user logged out successfully"
    })
};