class APIFeatures {
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr;
    }

    search(){
        let keyword = this.querystr.keyword?{
            name:{
                $regex: this.querystr.keyword,
                $options:'i'
            }
        }:{};
        this.query.find({...keyword})
        return this;
    }

    filter(){
        const querystrcopy = {...this.querystr};

        //removing fields from query
        const removefields = ['keyword','limit','page'];
        removefields.forEach(field => delete querystrcopy[field]);

        this.query.find(querystrcopy)
        return this;

    }


}

module.exports = APIFeatures;