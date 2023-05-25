const helpDetails = (req, res) => {
    return res.status(200).send({
        message: 'Successfully hitting the help api',
        success: true,
        data: {
            contract: "+91XXXXXXXX"
        }
    })
}

module.exports = {
    helpDetails
}