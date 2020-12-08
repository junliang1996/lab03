const arr = [{
    UniqueId: 001,
    name: 'WANG DADA',
    Age: 29,
    Job: 'Doctor'
},
{
    UniqueId: 002,
    name: 'LIU NILA',
    Age: 25,
    Job: 'teacher'
},
{
    UniqueId: 003,
    name: 'LI DAHAI',
    Age: 28,
    Job: 'chef'
},
{
    UniqueId: 004,
    name: 'HU LAN',
    Age: 32,
    Job: 'boss'
}];

exports.index = (_, res) => {
    res.status(200).json(arr);
};

exports.show = (req,res,next) => {

    const id = req.params.id;
    const a = arr.UniqueId[Id];
    
};