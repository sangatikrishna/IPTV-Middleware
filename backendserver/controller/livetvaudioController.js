import livetv_audios from "../models/livetv_audios.js";


//GET
const Livetvaudiosdatas = async (req, res) => {
  try {
    const data = await livetv_audios.find();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
export default Livetvaudiosdatas;

//GET by _id
const LivetvaudiosbyId = async (req, res) => {
  try {
    const data = await livetv_audios.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { LivetvaudiosbyId };

//POST API
const addLivetvaudios = async (req, res) => {
  const {
    id,
    kameraUrl,
    streamName,
    kameraDurum,
    kameraImage,
    category_id,
    created,
    position,
    kameraUrl_secondary,
    modified,
    visible,
  } = req.body;
  try {
    const newData = new livetv_audios({
      id,
      kameraUrl,
      streamName,
      kameraDurum,
      kameraImage,
      category_id,
      created,
      position,
      kameraUrl_secondary,
      modified,
      visible,
    });
    await newData.save();
    return res.json(await livetv_audios.find());
  } catch (err) {
    console.log(err.message);
  }
};
export { addLivetvaudios };




//DELETE API
const deletelivetvaudios = async (req, res) => {
  try {
    const deletelivetvaudios = await livetv_audios.findByIdAndDelete(
      req.params._id
    );
    if (!deletelivetvaudios) res.status(404).send("No item found");
    // return
    const livetvaudiosdata = await livetv_audios.find();
    res.status(200).json({
      status: "success",
      length: livetvaudiosdata.length,
      data: {
        livetvaudiosdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletelivetvaudios };

// patch

const LivetvaduioPatch = async (req, res) => {
  try {
    const patchId = req.params._id;
    const updated = await livetv_audios.findOneAndUpdate(
      { _id: patchId },
      req.body,
      { new: true }
    );
    console.log(updated);
    res.json({ updated });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
};
export { LivetvaduioPatch };


