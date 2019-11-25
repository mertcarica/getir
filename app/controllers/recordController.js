const db = require("../db/db");
var Records = require("../db/models/recordsModel")
const response = require("../helpers/response");
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

exports.getRecords = async function (req, res) {
  try {
    var { startDate, endDate, minCount, maxCount } = req.body

    const validationSchema = Joi.object({
      startDate: Joi.date().format("YYYY-MM-DD").required(),
      endDate: Joi.date().format("YYYY-MM-DD").required(),
      minCount: Joi.number().required(),
      maxCount: Joi.number().required()
    });

    const { error } = validationSchema.validate({
      startDate: startDate,
      endDate: endDate,
      minCount: minCount,
      maxCount: maxCount
    });

    const valid = error == null;

    if (!valid) {
      return response.sendBadRequest();
    } else {
      Records.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            }
          }
        },
        {
          $project: {
            _id: 0,
            key: "$key",
            createdAt: "$createdAt",
            totalCount: { $sum: "$counts" }
          }
        },
        {
          $match: {
            totalCount: {
              $gte: minCount,
              $lte: maxCount
            }
          }
        }
      ]).exec(function (err, records) {
        if (err) {
          return response.sendNotWorking(res);
        } else {
          return res.status(200).send({
            code: 0,
            msg: "Success",
            records
          });
        }
      });
    }


  } catch (err) {
    return response.sendNotWorking(res);
  }
};