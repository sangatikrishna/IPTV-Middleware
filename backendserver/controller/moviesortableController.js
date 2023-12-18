import categories from "../models/categoriesSchema.js"


const movieSortable =async (req, res) => {




    // Define a regex pattern for the desired date-time format
    // const dateTimePattern =date.format(now, 'YYYY/MM/DD HH:mm:ss');

    // // Use the .find() method with regex to filter the data
    // const data=categories.find({ created: { $regex: dateTimePattern } })


    //   // Events with timestamps matching the regex pattern
    //   console.log("Events with matching timestamps:", data);
    // const startDate = new Date('2015-07-28T14:42:16.000Z'); // Start date
    // const endDate = new Date('2023-12-31T23:59:59Z'); // End date

    // let query= {created: {
    //   $gte: startDate,
    //   $lte: endDate}}


    // const sorted=categories.find(query)

    // res.status(200).json({

    //       status:"success",
    //       length:sorted.length,
    //       data:{

    //         sorted}
    //       });


    let queryStr=JSON.stringify(req.query);
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

    const queryObj=JSON.parse(queryStr);
    console.log(queryObj);


    console.log(req.query)
    try{
      const moviesortable= await categories.find(queryObj);


        res.status(200).json({

        status:"success",
        length:moviesortable.length,
        data:{

          moviesortable}
        });
      }

        catch(err)
        {

          res.status(404).json({

            status:"fail",
            message:err.message}
          )}



    // if (categories.created) {
    //   const date = created
    //   const dateRange = categories.created.slice(0, -1); // strip the "d" from "7d"
    //   date.setDate( date- dateRange);
    //   req.query.start = { $lte: `2015-07-28T14:42:16.000Z` };
    //   console.log(req.query);
    // }


    // try{
    //   const moviesortable= await categories.find({$expr:
    //     {

    //       $and: [
    //     {
    //       "$eq": [{"$month": "$created"},1]
    //     },
    //     {
    //       "$eq": [{"$year": "$created"},2012]

    //     },

    //   ]},

    // });


    //     res.status(200).json({

    //     status:"success",
    //     length:moviesortable.length,
    //     data:{

    //       moviesortable}
    //     });
    //   }

        // catch(err)
        // {

        //   res.status(404).json({

        //     status:"fail",
        //     message:err.message}
        //   )}

          }

        export  {movieSortable}