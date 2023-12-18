import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VisuallyHiddenInput } from "@chakra-ui/visually-hidden";
import Joi from "joi";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Snackbar,
  Alert,
  
  RadioGroup,
  

  useMediaQuery,
} from "@mui/material";

import { Input } from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

import SidebarContent from "components/SidebarContent";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from "components/ChooseFile";

import { styled } from "@mui/material/styles";
import SidebarMonetize from "components/SidebarMonetize";
import axios from "axios";

const Addpackage = () => {
  const { _id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [checked, setChecked] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const validationSchema = Joi.object({
    // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
    id:  Joi.string().allow(null).allow(''),
    admin_id: Joi.string().allow(null).allow(''),
    status: Joi.string().allow(null).allow(''),
    

    // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
    name: Joi.string().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).min(3).max(30).required().label('enter name'),
    image: Joi.string().allow(null).allow(''),
    description: Joi.string().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).min(3).max(30).required().label('Description'),
    // name: Joi.string().empty('').label('Billing Type Name'),
  });


  const [formData, setFormData] = useState({
    id: "",

    id: "",

    name: "",

    image: "",

    description: "",

    admin_id: "",

    
    status: "",
    


    
  });

const handleReset = () => {
    setFormData({
     
    id: "",

    name: "",


    image: "",

    description: "",

    admin_id: "",

    status: "",
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/packages/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            id: productData.id,
            title: productData.title,

            name: productData.name,
            image: productData.image,
            description: productData.description,
            admin_id: productData.admin_id,
            status: productData.status,
            // available: productData.available,
            // description: productData.description,
          });
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [_id]);

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/packages/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            id: productData.id,

            title: productData.title,

            name: productData.name,
            image: productData.image,
            description: productData.description,
            admin_id: productData.admin_id,
            status: productData.status,
            // available: productData.available,
            // description: productData.description,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);
  
  const handleSubmit = (e) => {
 
    e.preventDefault();

    const validationResult = validationSchema.validate(formData, {
      abortEarly: false,
    });
 
    if (validationResult.error) {
      setValidationError(validationResult.error.details);
      return;
    }
setValidationError(null);

    if (_id){


      const apiUrl = `http://localhost:5001/api/packages/patch/${_id}`; // Edit
    axios
      .patch(apiUrl, formData) // Use axios.patch for the PATCH request
      .then((response) => {
        setSuccessMessage("Product updated successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // If _id is not defined, it's an add operation
    const apiUrl = "http://localhost:5001/api/packages/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("Product added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

  // };

  //   // console.log(formData);
  //   axios
  //     .post('http://localhost:5001/api/categories/post', formData)
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };

  // const handleChange = (e) => {

  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   console.log(formData);

  // };


 

  //   width: 1,

  // });

 

  const [categorieslist, setcategorieslist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/categories/find")
      .then((response) => response.json())
      .then((json) => setcategorieslist(json.data));
  }, []);
  console.log(categorieslist);
 
  const [show_categories, setshow_categories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/show_categories/find")
      .then((response) => response.json())
      .then((json) => setshow_categories(json.data));
  }, []);
  console.log(show_categories);
 
  const [song_categories, setsong_categories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/song_categories/find")
      .then((response) => response.json())
      .then((json) => setsong_categories(json.data));
  }, []);
  console.log(song_categories);
 

  return (
   
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "250px"}>
    {/* //  m="1.5rem 2.5rem" ml="250px" */}
      <FlexBetween>
        <Header title="PACKAGE DETAILS" />

       
      </FlexBetween>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          variant="outlined"

          value={formData.name}

          onChange={handleChange}
          margin="normal"
        />

        {/* <FormControl>

            <FormControlLabel

            label = " Visible"

              control={

                <Checkbox

                  id="agree"

                  checked={checked}

                  onChange={(e) => setChecked(e.target.checked)}

                />

               

              }

             />

           

          </FormControl> */}

        {/* <InputFileUpload /> */}

        <Box>
          <div>
            

        <Typography variant="h6">Select Package Image :</Typography>
        <br/>

 

        {/* <Button

          component="label"

          variant="contained"

          startIcon={<CloudUpload />}

        > */}


          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            required="required" 
          ></input>

          {/* <VisuallyHiddenInput type="file" /> */}

        {/* </Button> */}

      </div>

    </Box>

        <TextField
          fullWidth
          name="description"
          label="Description"
          variant="outlined"

          value={formData.description}

          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="dailyamount"
          label="Daily Amount"
          variant="outlined"

          value={formData.dailyamount}

          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="weekly_amount"
          label="Weekly Amount"
          variant="outlined"

          value={formData.weekly_amount}

          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="monthly_amount"
          label="Monthly Amount"
          variant="outlined"

          value={formData.monthly_amount}

          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="quartely_amount"
          label="Quarterly Amount"
          variant="outlined"

          value={formData.quartely_amount}

          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="half_yearly_amount"
          label="Half Yearly Amount"
          variant="outlined"

          value={formData.half_yearly_amount}

          onChange={handleChange}
          margin="normal"
        />

        {/* <TextField

        fullWidth

        name="backup_stream_6"

        label="Backup stream 6"

        variant="outlined"

        value={formData.backup_stream_6}

        onChange={handleChange}

        margin="normal"

      /> */}

        {/* <InputFileUpload/> */}

        {/* <TextField

        fullWidth

        name="select_channel_image"

        label="Select Channel Image"

        variant="outlined"

        value={formData.select_channel_image}

        onChange={handleChange}

        margin="normal"

         

      /> */}

        {/* <TextField

        fullWidth

        name="select_channel_image"

        label={<SelectImageSection/>}

        variant="outlined"

        value={formData.select_channel_image}

        onChange={handleChange}

        margin="normal"

        multiline

        rows={3}

         

      /> */}

        {/* Select1 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">VOD Packages</InputLabel>

          <Select
            label="VOD Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem>(Choose Category)</MenuItem>
            {categorieslist.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.title}
              </MenuItem>
            ))}
            {/* <MenuItem value="english">2005-Down</MenuItem>

            <MenuItem value="spanish">2006-2012</MenuItem>

            <MenuItem value="african">2013-2015</MenuItem>

            <MenuItem value="arabic">2016-2017</MenuItem>

            <MenuItem value="sports">2018-2019</MenuItem>

            <MenuItem value="kids">2020-2021</MenuItem>

            <MenuItem value="news">2022-2023</MenuItem>

            <MenuItem value="religion">2024-2025</MenuItem>

            <MenuItem value="music">Action</MenuItem>

            <MenuItem value="turkish">ADEL Emam</MenuItem>

            <MenuItem value="iraq">ARABIC</MenuItem>

            <MenuItem value="maghreb">Arabic Old</MenuItem>

            <MenuItem value="german">BIOGRAPHY</MenuItem>

            <MenuItem value="france">COMEDY</MenuItem>

            <MenuItem value="hd_channels">Documentary</MenuItem>

            <MenuItem value="farsi">DRAMA</MenuItem>

            <MenuItem value="Fantasy And SIFI">Fantasy And SIFI</MenuItem>

            <MenuItem value="HOLLYWOOD MOVIES">HOLLYWOOD MOVIES</MenuItem>

            <MenuItem value="HOLLYWOOD MOVIES II">HOLLYWOOD MOVIES II</MenuItem>

            <MenuItem value="Horror">Horror</MenuItem>

            <MenuItem value="INDIAN">INDIAN</MenuItem>

            <MenuItem value="KIDS">KIDS</MenuItem>

            <MenuItem value="MAH.ABD.AIZA">MAH.ABD.AIZA</MenuItem>

            <MenuItem value="Moh. Al. MILIGE">Moh. Al. MILIGE</MenuItem>

            <MenuItem value="Mystery">Mystery</MenuItem>

            <MenuItem value="Nahed Sheref">Nahed Sheref</MenuItem>

            <MenuItem value="Test">Test</MenuItem>

            <MenuItem value="THEATRE">THEATRE</MenuItem>

            <MenuItem value="christian">Christian</MenuItem>

            <MenuItem value="TOP 12">TOP 12</MenuItem>

            {/* Add more language MenuItems as needed */}

            {/* Select2 */}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">MOD Packages</InputLabel>

          <Select
            label="MOD Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem value="92">دنيا 2</MenuItem>

            <MenuItem value="95">بنات سوبرمان</MenuItem>

            <MenuItem value="93">الأسطورة</MenuItem>

            <MenuItem value="94">سيلفي 2</MenuItem>

            <MenuItem value="9">Al Welada men Al5asira</MenuItem>

            <MenuItem value="10">Farek Tawkeat</MenuItem>

            <MenuItem value="11">lo3bat al mout</MenuItem>

            <MenuItem value="12">Sejen Al Nesa</MenuItem>

            <MenuItem value="13">Tahaluf Al Sabar</MenuItem>

            <MenuItem value="14">2tiham</MenuItem>

            <MenuItem value="15">Ma Wara&#039; Al Wojouh</MenuItem>

            <MenuItem value="16">El.Kabier EP03</MenuItem>

            <MenuItem value="18">سيلفي</MenuItem>

            <MenuItem value="19">قابل للكسر</MenuItem>

            <MenuItem value="20">عناية مشددة</MenuItem>

            <MenuItem value="21">الكابوس</MenuItem>

            <MenuItem value="150">قيراط 24</MenuItem>

            <MenuItem value="22">النور</MenuItem>

            <MenuItem value="23">حق ميت </MenuItem>

            <MenuItem value="24">wrong1</MenuItem>

            <MenuItem value="25">ذاكرة من ورق </MenuItem>

            <MenuItem value="26">لك يوم </MenuItem>

            <MenuItem value="27">لعبة ابليس </MenuItem>

            <MenuItem value="28">في ظروف غامضة</MenuItem>

            <MenuItem value="29">ابن حلال</MenuItem>

            <MenuItem value="30">قلم حمرة.</MenuItem>

            <MenuItem value="31">يوميات زوجة مفروسة أوي </MenuItem>

            <MenuItem value="153">مريم</MenuItem>

            <MenuItem value="32">للحب كلمة </MenuItem>

            <MenuItem value="33">P3Series17</MenuItem>

            <MenuItem value="34">حارة اليهود</MenuItem>

            <MenuItem value="35">بين السرايات</MenuItem>

            <MenuItem value="36">بانتظار الياسمين</MenuItem>

            <MenuItem value="37">قصص الانسان في القران </MenuItem>

            <MenuItem value="38">P3Series22</MenuItem>

            <MenuItem value="39">يوميات حدو</MenuItem>

            <MenuItem value="40">wrong</MenuItem>

            <MenuItem value="41">عيال نوير</MenuItem>

            <MenuItem value="42">العراب</MenuItem>

            <MenuItem value="152">طوق البنات 2</MenuItem>

            <MenuItem value="43">وعدتني يا رفيقي</MenuItem>

            <MenuItem value="44">العهد</MenuItem>

            <MenuItem value="45">أرض النعام</MenuItem>

            <MenuItem value="46">لما تامر ساب شوقية</MenuItem>

            <MenuItem value="47">بقعة ضوء 11 .</MenuItem>

            <MenuItem value="144"></MenuItem>

            <MenuItem value="149">وجوه وراء الوجوه</MenuItem>

            <MenuItem value="49">مولانا العاشق</MenuItem>

            <MenuItem value="50">تشيللو</MenuItem>

            <MenuItem value="51">أستاذ و رئيس قسم</MenuItem>

            <MenuItem value="52">سعد واخواته</MenuItem>

            <MenuItem value="53">باب الحارة7</MenuItem>

            <MenuItem value="54">ولي العهد</MenuItem>

            <MenuItem value="55">ذهاب وعودة</MenuItem>

            <MenuItem value="56">حواري بوخارست</MenuItem>

            <MenuItem value="57">P3Series32</MenuItem>

            <MenuItem value="58">P3Series33</MenuItem>

            <MenuItem value="59">ملوك الطوائف</MenuItem>

            <MenuItem value="60">الاخوة 2</MenuItem>

            <MenuItem value="61">سلسال الدم</MenuItem>

            <MenuItem value="62">عشق النساء</MenuItem>

            <MenuItem value="63">لعبة الموت</MenuItem>

            <MenuItem value="64">كيكا على العالي</MenuItem>

            <MenuItem value="65">تفاحة آدم </MenuItem>

            <MenuItem value="66">سمارة </MenuItem>

            <MenuItem value="67">شارع عبد العزيز</MenuItem>

            <MenuItem value="68">العندليب </MenuItem>

            <MenuItem value="69">سنعود بعد قليل</MenuItem>

            <MenuItem value="70">الولادة من الخاصرة</MenuItem>

            <MenuItem value="71">بنات العيلة </MenuItem>

            <MenuItem value="72">المفتاح</MenuItem>

            <MenuItem value="73">ما ملكت أيمانكم </MenuItem>

            <MenuItem value="74"> وراء الشمس</MenuItem>

            <MenuItem value="75">خطوط حمراء</MenuItem>

            <MenuItem value="76">دهشة</MenuItem>

            <MenuItem value="77">P4Series13</MenuItem>

            <MenuItem value="78">ظرف إسود</MenuItem>

            <MenuItem value="79">نيران صديقة</MenuItem>

            <MenuItem value="80">P4Series16</MenuItem>

            <MenuItem value="81">دكتور أمراض نسا</MenuItem>

            <MenuItem value="82">مزاج الخير</MenuItem>

            <MenuItem value="83">P4Series19</MenuItem>

            <MenuItem value="84">شربات لوز</MenuItem>

            <MenuItem value="91"></MenuItem>

            <MenuItem value="96">الخروج</MenuItem>

            <MenuItem value="87">الخربة </MenuItem>

            <MenuItem value="88">ضيعة ضايعة </MenuItem>

            <MenuItem value="90"></MenuItem>

            <MenuItem value="97">أفراح القبة</MenuItem>

            <MenuItem value="98">جريمة شغف</MenuItem>

            <MenuItem value="99">الميزان</MenuItem>

            <MenuItem value="100">مأمون وشركاه</MenuItem>

            <MenuItem value="101">باب الحارة 8</MenuItem>

            <MenuItem value="102">يا ريت</MenuItem>

            <MenuItem value="103">نص يوم</MenuItem>

            <MenuItem value="104">ليالي الحلمية: الجزء السادس</MenuItem>

            <MenuItem value="105">العرّاب: تحت الحزام</MenuItem>

            <MenuItem value="106">الطواريد</MenuItem>

            <MenuItem value="107">وعد</MenuItem>

            <MenuItem value="108">ابو البنات</MenuItem>

            <MenuItem value="109">بقعة ضوء 12</MenuItem>

            <MenuItem value="110">عطر الشام </MenuItem>

            <MenuItem value="111">هي ودافنشي</MenuItem>

            <MenuItem value="112">نبتدي منين الحكاية</MenuItem>

            <MenuItem value="113">أحمر</MenuItem>

            <MenuItem value="114">صرخة روح 4</MenuItem>

            <MenuItem value="115">خاتون</MenuItem>

            <MenuItem value="116">يونس ولد فضة</MenuItem>

            <MenuItem value="117">2يوميات زوجة مفروسة أوي</MenuItem>

            <MenuItem value="118">الندم</MenuItem>

            <MenuItem value="119">طوق البنات 3</MenuItem>

            <MenuItem value="120">دومينو</MenuItem>

            <MenuItem value="121">مذنبون أبرياء</MenuItem>

            <MenuItem value="122">بلا غمد</MenuItem>

            <MenuItem value="123">زوال</MenuItem>

            <MenuItem value="124">حدث في دمشق</MenuItem>

            <MenuItem value="125">حلاوة روح</MenuItem>

            <MenuItem value="126">حارة المشرقة</MenuItem>

            <MenuItem value="127">حرائر</MenuItem>

            <MenuItem value="128">سمرقند</MenuItem>

            <MenuItem value="129">جراند أوتيل</MenuItem>

            <MenuItem value="130"> نيللي وشريهان</MenuItem>

            <MenuItem value="131">صدر الباز</MenuItem>

            <MenuItem value="132">الطبال</MenuItem>

            <MenuItem value="133">سبع ارواح</MenuItem>

            <MenuItem value="134">كلمة سر</MenuItem>

            <MenuItem value="135">ازمة نسب</MenuItem>

            <MenuItem value="136">كبريت 45</MenuItem>

            <MenuItem value="137">ونوس</MenuItem>

            <MenuItem value="138">تحت السيطرة</MenuItem>

            <MenuItem value="139">فوق مستوى الشبهات</MenuItem>

            <MenuItem value="140"> فتنة زمانها</MenuItem>

            <MenuItem value="141">الكيف</MenuItem>

            <MenuItem value="142">3 هبة رجل الغراب</MenuItem>

            <MenuItem value="143">صد و رد</MenuItem>

            <MenuItem value="147"></MenuItem>

            <MenuItem value="157"> سكر وسط</MenuItem>

            <MenuItem value="158">كلام على ورق</MenuItem>

            <MenuItem value="154">غداً نلتقي</MenuItem>

            <MenuItem value="155">علاقات خاصة</MenuItem>

            <MenuItem value="156">عد تنازلي</MenuItem>

            <MenuItem value="162">العشق الحرام</MenuItem>

            <MenuItem value="163">حارة الطنابر</MenuItem>

            <MenuItem value="164">الغربال </MenuItem>

            <MenuItem value="252">فرقة ناجي عطاالله</MenuItem>

            <MenuItem value="166">ساق البامبو</MenuItem>

            <MenuItem value="167">زواج بالإكراه</MenuItem>

            <MenuItem value="196"></MenuItem>

            <MenuItem value="169">سلسال الدم 4</MenuItem>

            <MenuItem value="170">ذكريات لا تموت</MenuItem>

            <MenuItem value="171">أنا وبابا وماما</MenuItem>

            <MenuItem value="172">القيصر</MenuItem>

            <MenuItem value="173">فيفا أطاطا</MenuItem>

            <MenuItem value="174">30 يوم</MenuItem>

            <MenuItem value="175">الهيبة</MenuItem>

            <MenuItem value="212"></MenuItem>

            <MenuItem value="213">هذا المساء</MenuItem>

            <MenuItem value="177">رمضان كريم</MenuItem>

            <MenuItem value="178">ازاي الصحة</MenuItem>

            <MenuItem value="179">ظل الرئيس</MenuItem>

            <MenuItem value="180">طوق البنات 4</MenuItem>

            <MenuItem value="181">عشم إبليس</MenuItem>

            <MenuItem value="182">باب الحارة 9</MenuItem>

            <MenuItem value="183">لا تطفئ الشمس</MenuItem>

            <MenuItem value="184">الحلال</MenuItem>

            <MenuItem value="185">لمعي القط</MenuItem>

            <MenuItem value="202">لست جارية</MenuItem>

            <MenuItem value="203">حكم الهوى</MenuItem>

            <MenuItem value="186">اليوم الأسود</MenuItem>

            <MenuItem value="187">عفاريت عدلي علام</MenuItem>

            <MenuItem value="188">غرابيب سود</MenuItem>

            <MenuItem value="197"> خاتون 2</MenuItem>

            <MenuItem value="189">سيلفي 3</MenuItem>

            <MenuItem value="199"></MenuItem>

            <MenuItem value="200">بقعة ضوء 13</MenuItem>

            <MenuItem value="190">قناديل العشاق</MenuItem>

            <MenuItem value="211">لأعلى سعر</MenuItem>

            <MenuItem value="191">حلاوة الدنيا</MenuItem>

            <MenuItem value="192">كان في كل زمان</MenuItem>

            <MenuItem value="193">الحالة جيم</MenuItem>

            <MenuItem value="194">اللهم إني صائم</MenuItem>

            <MenuItem value="195">الحصان الأسود</MenuItem>

            <MenuItem value="201">أزمة عائلية</MenuItem>

            <MenuItem value="204">سنة أولى زواج </MenuItem>

            <MenuItem value="205">الحرباية </MenuItem>

            <MenuItem value="206">عطر الشام 2</MenuItem>

            <MenuItem value="207">أهل الغرام 3</MenuItem>

            <MenuItem value="208">الزيبق</MenuItem>

            <MenuItem value="209">رمانه</MenuItem>

            <MenuItem value="210">كلبش</MenuItem>

            <MenuItem value="214">طاقة نور</MenuItem>

            <MenuItem value="215">ال لا لا لاند</MenuItem>

            <MenuItem value="216">وضع أمني</MenuItem>

            <MenuItem value="217">أرض جو</MenuItem>

            <MenuItem value="218">طاقة القدر</MenuItem>

            <MenuItem value="219">واحة الغروب</MenuItem>

            <MenuItem value="220">كفر دلهاب</MenuItem>

            <MenuItem value="221">الحساب يجمع</MenuItem>

            <MenuItem value="222">الخان</MenuItem>

            <MenuItem value="223">شو القصة</MenuItem>

            <MenuItem value="224">دامسكو </MenuItem>

            <MenuItem value="225">أوركيديا</MenuItem>

            <MenuItem value="226">نحن لها </MenuItem>

            <MenuItem value="227">خلصانه بشياكة</MenuItem>

            <MenuItem value="228"> أدهم بيك </MenuItem>

            <MenuItem value="229">الجماعة 2</MenuItem>

            <MenuItem value="230">سليمو و حريمو</MenuItem>

            <MenuItem value="231">جنان النسوان</MenuItem>

            <MenuItem value="232">خواتم</MenuItem>

            <MenuItem value="233">الخانكة</MenuItem>

            <MenuItem value="234">شوق</MenuItem>

            <MenuItem value="235">هربانة منها</MenuItem>

            <MenuItem value="236">الهروب</MenuItem>

            <MenuItem value="237">عين الجوزة</MenuItem>

            <MenuItem value="238">الكبريت الاحمر</MenuItem>

            <MenuItem value="239">سقوط حر</MenuItem>

            <MenuItem value="240">راس الغول</MenuItem>

            <MenuItem value="241"> المغني</MenuItem>

            <MenuItem value="242">كيد الحموات</MenuItem>

            <MenuItem value="243">حمام شامي </MenuItem>

            <MenuItem value="244">اتهام</MenuItem>

            <MenuItem value="245">فخامة الشك</MenuItem>

            <MenuItem value="246">قصر العشاق </MenuItem>

            <MenuItem value="247">ليلة</MenuItem>

            <MenuItem value="248">بلحظة </MenuItem>

            <MenuItem value="249">الاكسلانس </MenuItem>

            <MenuItem value="250">شهادة ميلاد</MenuItem>

            <MenuItem value="251">السبع بنات</MenuItem>

            <MenuItem value="253">وعدي </MenuItem>

            <MenuItem value="254"> الحرب العائلية الاولى</MenuItem>

            <MenuItem value="255"> يلا شباب يلا بنات</MenuItem>

            <MenuItem value="256">ستات قادرة</MenuItem>

            <MenuItem value="257">المطلقات</MenuItem>

            <MenuItem value="258">الوان الطيف</MenuItem>

            <MenuItem value="259"> شاش × قطن</MenuItem>

            <MenuItem value="260">الزوجة الرابعة</MenuItem>

            <MenuItem value="261">لهفه</MenuItem>

            <MenuItem value="262">ضبو الشناتي</MenuItem>

            <MenuItem value="263">عود أخضر</MenuItem>

            <MenuItem value="264">لو </MenuItem>

            <MenuItem value="265">كاريوكا</MenuItem>

            <MenuItem value="266">وش تاني</MenuItem>

            <MenuItem value="267">ظرف اسود</MenuItem>

            <MenuItem value="268">اسم مؤقت</MenuItem>

            <MenuItem value="269">قلبي معي</MenuItem>

            <MenuItem value="270">دوائر الحب</MenuItem>

            <MenuItem value="271">الأب الروحي</MenuItem>

            <MenuItem value="272">رقم مجهول</MenuItem>

            <MenuItem value="273">شاميات تو </MenuItem>

            <MenuItem value="274">قصة حب</MenuItem>

            <MenuItem value="275">باب الخلق </MenuItem>

            <MenuItem value="276">ولاد البلد</MenuItem>

            <MenuItem value="277">وديمة وحليمة 1</MenuItem>

            <MenuItem value="278">وديمة وحليمة 2</MenuItem>

            <MenuItem value="279">ضيعة ضايعة 2</MenuItem>

            <MenuItem value="280">ابو جانتي 1</MenuItem>

            <MenuItem value="282">ابو جانتي 2</MenuItem>

            <MenuItem value="283">أيام الدراسة 1</MenuItem>

            <MenuItem value="284">أيام الدراسة 2</MenuItem>

            <MenuItem value="285">جراب حوا</MenuItem>

            <MenuItem value="286">الإخوة 1</MenuItem>

            <MenuItem value="287">سمرا</MenuItem>

            <MenuItem value="288">بنت الشهبندر</MenuItem>

            <MenuItem value="289">أرواح عارية</MenuItem>

            <MenuItem value="290">البيوت اسرار</MenuItem>

            <MenuItem value="291">جبل حلال </MenuItem>

            <MenuItem value="292">مسيو رمضان مبروك أبو العلمين حمودة </MenuItem>

            <MenuItem value="293"> حجر جهنم</MenuItem>

            <MenuItem value="294"> بعد البداية</MenuItem>

            <MenuItem value="295">بواب الريح</MenuItem>

            <MenuItem value="296">ريح المدام</MenuItem>

            <MenuItem value="297">الإخوة ـ الجزء الثاني</MenuItem>

            <MenuItem value="298">الجماعة</MenuItem>

            <MenuItem value="299">الرحلة</MenuItem>

            <MenuItem value="300">أرض النفاق</MenuItem>

            <MenuItem value="301">بالحجم العائلي</MenuItem>

            <MenuItem value="302">566</MenuItem>

            <MenuItem value="303">ممنوع الاقتراب أو التصوير</MenuItem>

            <MenuItem value="304">2 الهيبة</MenuItem>

            <MenuItem value="305">طريق</MenuItem>

            <MenuItem value="306">إختفاء</MenuItem>

            <MenuItem value="307">تانغو</MenuItem>

            <MenuItem value="308">سك على إخواتك</MenuItem>

            <MenuItem value="309">عطر الشام الجزء 3</MenuItem>

            <MenuItem value="310"> رائحة الروح</MenuItem>

            <MenuItem value="311"> روزنا</MenuItem>

            <MenuItem value="312">الغريب</MenuItem>

            <MenuItem value="313">وهم</MenuItem>

            <MenuItem value="373">ترجمان الاشواق</MenuItem>

            <MenuItem value="315">قانون عمر</MenuItem>

            <MenuItem value="317">عوالم خفية</MenuItem>

            <MenuItem value="318"> رحيم</MenuItem>

            <MenuItem value="319">نسر الصعيد</MenuItem>

            <MenuItem value="320"> أيوب</MenuItem>

            <MenuItem value="321"> مليكة</MenuItem>

            <MenuItem value="322"> فوضى</MenuItem>

            <MenuItem value="323"> الواق واق</MenuItem>

            <MenuItem value="324">كلبش ٢</MenuItem>

            <MenuItem value="325">سلسال الدم الجزء الخامس</MenuItem>

            <MenuItem value="326">موت أميرة</MenuItem>

            <MenuItem value="327"> البيت الأبيض</MenuItem>

            <MenuItem value="328">عزمي وأشجان</MenuItem>

            <MenuItem value="329">2الكبريت الأحمر</MenuItem>

            <MenuItem value="330">ولاد تسعة</MenuItem>

            <MenuItem value="331">ضد مجهول</MenuItem>

            <MenuItem value="332">فوق السحاب</MenuItem>

            <MenuItem value="334">كلبش2</MenuItem>

            <MenuItem value="335">هارون الرشيد</MenuItem>

            <MenuItem value="336">شيء من الماضي</MenuItem>

            <MenuItem value="337">أماني العمر</MenuItem>

            <MenuItem value="338">أبو عمر المصري</MenuItem>

            <MenuItem value="340">رسايل</MenuItem>

            <MenuItem value="341">ببساطة</MenuItem>

            <MenuItem value="342">الحجاج</MenuItem>

            <MenuItem value="343">كيد النسا 2</MenuItem>

            <MenuItem value="344">لاعلى سعر</MenuItem>

            <MenuItem value="345">لدينا اقوال اخرى</MenuItem>

            <MenuItem value="346">غصون في الوحل</MenuItem>

            <MenuItem value="347">الكبير اوي 5</MenuItem>

            <MenuItem value="348">اخت تريز</MenuItem>

            <MenuItem value="349"> زوج الست</MenuItem>

            <MenuItem value="350"> آخر الليل</MenuItem>

            <MenuItem value="351">عندي قلب </MenuItem>

            <MenuItem value="352">كيكا علي العالي</MenuItem>

            <MenuItem value="353"> 3 الهيبة</MenuItem>

            <MenuItem value="354">خمسة ونص</MenuItem>

            <MenuItem value="355">احلى ايام</MenuItem>

            <MenuItem value="362">بقعة ضوء14 </MenuItem>

            <MenuItem value="357">باب الحارة 10</MenuItem>

            <MenuItem value="358">حرملك</MenuItem>

            <MenuItem value="359">ولد الغلابة</MenuItem>

            <MenuItem value="360">زلزال</MenuItem>

            <MenuItem value="361">العاصوف</MenuItem>

            <MenuItem value="364">زي الشمس</MenuItem>

            <MenuItem value="363">كلبش 3</MenuItem>

            <MenuItem value="365"> سلاسل ذهب </MenuItem>

            <MenuItem value="366">شوارع الشام العتيقة</MenuItem>

            <MenuItem value="367">هوا اصفر</MenuItem>

            <MenuItem value="368">دقيقة صمت</MenuItem>

            <MenuItem value="376">بدل الحدوته ٣</MenuItem>

            <MenuItem value="369">بقعة ضوء 14</MenuItem>

            <MenuItem value="370">قابيل</MenuItem>

            <MenuItem value="371">عندما تشيخ الذئاب</MenuItem>

            <MenuItem value="372">كونتاك</MenuItem>

            <MenuItem value="374">اثر الفراشة</MenuItem>

            <MenuItem value="375">ما فيي</MenuItem>

            <MenuItem value="377">حكايتي</MenuItem>

            <MenuItem value="378">عذراء</MenuItem>

            <MenuItem value="379">العراف</MenuItem>

            <MenuItem value="380">وطن ع وتر</MenuItem>

            <MenuItem value="381">كشف الأقنعة</MenuItem>

            <MenuItem value="382">مسافة امان</MenuItem>

            <MenuItem value="383">شبابيك</MenuItem>

            <MenuItem value="384">سوبر ميرو</MenuItem>

            <MenuItem value="385">اهل الوفا</MenuItem>

            <MenuItem value="386">حدك مدك </MenuItem>

            <MenuItem value="387"> عن الهوى والجوى</MenuItem>

            <MenuItem value="388">المواجهة</MenuItem>

            <MenuItem value="389"> لعنة كارما</MenuItem>

            <MenuItem value="390">النص التاني</MenuItem>

            <MenuItem value="391"> السهام المارقة</MenuItem>

            <MenuItem value="392"> بين عالمين</MenuItem>

            <MenuItem value="393">مسلسل الدولي</MenuItem>

            <MenuItem value="394">فض اشتباك</MenuItem>

            <MenuItem value="395">أمر واقع</MenuItem>

            <MenuItem value="396">طايع</MenuItem>

            <MenuItem value="397">حالة خاصة</MenuItem>

            <MenuItem value="398">حكاية حياة</MenuItem>

            <MenuItem value="399">حركات بنات</MenuItem>

            <MenuItem value="400"> حدوتة حب</MenuItem>

            <MenuItem value="401">الوصية</MenuItem>

            <MenuItem value="433">مافيي 2</MenuItem>

            <MenuItem value="403">فلانتينو</MenuItem>

            <MenuItem value="404">رامز مجنون رسمي</MenuItem>

            <MenuItem value="405">سوق الحرير</MenuItem>

            <MenuItem value="406">حرملك الجزء الثاني</MenuItem>

            <MenuItem value="407">أولاد آدم</MenuItem>

            <MenuItem value="408">البرنس</MenuItem>

            <MenuItem value="409">الاختيار</MenuItem>

            <MenuItem value="410">الفتوة</MenuItem>

            <MenuItem value="411">النهاية</MenuItem>

            <MenuItem value="412">لما كنا صغيرين</MenuItem>

            <MenuItem value="413">بروكار</MenuItem>

            <MenuItem value="414">نبض</MenuItem>

            <MenuItem value="415">النحات</MenuItem>

            <MenuItem value="416">شاهد عيان</MenuItem>

            <MenuItem value="417">أحلى ايام</MenuItem>

            <MenuItem value="418">الساحر</MenuItem>

            <MenuItem value="419">الجوكر</MenuItem>

            <MenuItem value="420">فرصة تانية</MenuItem>

            <MenuItem value="421">لعبة النسيان</MenuItem>

            <MenuItem value="424">مقابلة مع السيد ادم</MenuItem>

            <MenuItem value="423">مقابله مع السيد ادم</MenuItem>

            <MenuItem value="425">بي 100 وش</MenuItem>

            <MenuItem value="426">يوما ما</MenuItem>

            <MenuItem value="427">ونحب تاني ليه </MenuItem>

            <MenuItem value="428">خيانة عهد</MenuItem>

            <MenuItem value="429">سلطانة المعز</MenuItem>

            <MenuItem value="430">عمر ودياب</MenuItem>

            <MenuItem value="431">رجالة البيت </MenuItem>

            <MenuItem value="432">ميادا وولادا</MenuItem>

            <MenuItem value="434">عهد الدم</MenuItem>

            <MenuItem value="435"> الديفا</MenuItem>

            <MenuItem value="436">ولاد امبابة</MenuItem>

            <MenuItem value="437">ببساطة 2</MenuItem>

            <MenuItem value="438">أمر إخلاء</MenuItem>

            <MenuItem value="439">كنا أمس</MenuItem>

            <MenuItem value="440">كوما </MenuItem>

            <MenuItem value="441">صانع الأحلام</MenuItem>

            <MenuItem value="442">ناس من ورق</MenuItem>

            <MenuItem value="443">حريم الشاويش</MenuItem>

            <MenuItem value="444">الهيبة الرد</MenuItem>

            <MenuItem value="445">اسود فاتح</MenuItem>

            <MenuItem value="446">خيط حرير</MenuItem>

            <MenuItem value="447">العميد</MenuItem>

            <MenuItem value="448">DNA</MenuItem>

            <MenuItem value="449">اسعاف يونس</MenuItem>

            <MenuItem value="450">العمارة</MenuItem>

            <MenuItem value="451">لا حكم عليه</MenuItem>

            <MenuItem value="452">الا انا حكاية اول السطر</MenuItem>

            <MenuItem value="453">ربع قيراط</MenuItem>

            <MenuItem value="454">لازم اعيش </MenuItem>

            <MenuItem value="455">ضي القمر</MenuItem>

            <MenuItem value="456">لؤلؤ</MenuItem>

            <MenuItem value="457">انا</MenuItem>

            <MenuItem value="458">2020</MenuItem>

            <MenuItem value="459">للموت</MenuItem>

            <MenuItem value="460">سوق الحرير 2 </MenuItem>

            <MenuItem value="461">حارة القبة</MenuItem>

            <MenuItem value="462">بنت السلطان</MenuItem>

            <MenuItem value="463">حرب اهلية</MenuItem>

            <MenuItem value="464">موسى </MenuItem>

            <MenuItem value="465">كله بالحب</MenuItem>

            <MenuItem value="466">اللي مالوش كبير</MenuItem>

            <MenuItem value="467">ضيوف على الحب</MenuItem>

            <MenuItem value="468">بعد عدة سنوات</MenuItem>

            <MenuItem value="469">على صفيح ساخن</MenuItem>

            <MenuItem value="470">الطاووس</MenuItem>

            <MenuItem value="471">فارس بلا جواز</MenuItem>

            <MenuItem value="472">باب الحارة ج11: حارة الصالحية</MenuItem>

            <MenuItem value="473">وكل ما نفترق</MenuItem>

            <MenuItem value="474">ضل راجل</MenuItem>

            <MenuItem value="475">أمينة حاف</MenuItem>

            <MenuItem value="476">350 جرام</MenuItem>

            <MenuItem value="477">مارغريت</MenuItem>

            <MenuItem value="478">ممنوع التجول</MenuItem>

            <MenuItem value="479">قصر النيل</MenuItem>

            <MenuItem value="480">الديك الأزرق</MenuItem>

            <MenuItem value="481">خلي بالك من زيزي</MenuItem>

            <MenuItem value="482">نسل الأغراب</MenuItem>

            <MenuItem value="483">وطن ع وتر 2021</MenuItem>

            <MenuItem value="484">دفعة بيروت</MenuItem>

            <MenuItem value="485">رامز عقله طار</MenuItem>

            <MenuItem value="486">زواج تحت الإقامة الجبرية</MenuItem>

            <MenuItem value="487"> بناية هب الريح</MenuItem>

            <MenuItem value="488">الكندوش</MenuItem>

            <MenuItem value="489">انتقام بارد</MenuItem>

            <MenuItem value="490">قيد مجهول</MenuItem>

            <MenuItem value="491">ملوك الجدعنة</MenuItem>

            <MenuItem value="492">خرزة زرقا</MenuItem>

            <MenuItem value="493">حلوة الدنيا سكر</MenuItem>

            <MenuItem value="494">اربعة في واحد</MenuItem>

            <MenuItem value="495">دور العمر</MenuItem>

            <MenuItem value="496">الحرامي الموسم الثاني</MenuItem>

            <MenuItem value="497">الا انا حكاية ربع قيراط</MenuItem>

            <MenuItem value="498">شقة ستة</MenuItem>

            <MenuItem value="499">الجدار الرابع</MenuItem>

            <MenuItem value="500">صالون زهره</MenuItem>

            <MenuItem value="501">الهيبة جبل 5</MenuItem>

            <MenuItem value="502">المنصة الموسم الاول</MenuItem>

            <MenuItem value="503">المنصة الموسم الثاني</MenuItem>

            <MenuItem value="504">المنصة الموسم الثالث</MenuItem>

            <MenuItem value="505">اعترافات</MenuItem>

            <MenuItem value="506">الوضع مستقر</MenuItem>

            <MenuItem value="507">السنونو</MenuItem>

            <MenuItem value="508">ع الحلوة والمرة</MenuItem>

            <MenuItem value="509"> ايام 8</MenuItem>

            <MenuItem value="510">مسيرتي</MenuItem>

            <MenuItem value="511">شتي يا بيروت</MenuItem>

            <MenuItem value="512">بارانويا</MenuItem>

            <MenuItem value="513">موضوع عائلي</MenuItem>

            <MenuItem value="514">جنية </MenuItem>

            <MenuItem value="515">ستات بيت المعادي</MenuItem>

            <MenuItem value="516">الزيارة</MenuItem>

            <MenuItem value="517">عالحد</MenuItem>

            <MenuItem value="518">بيمبو</MenuItem>

            <MenuItem value="519">وثيقة شرف</MenuItem>

            <MenuItem value="520">انا وهي</MenuItem>

            <MenuItem value="521">البحث عن علا</MenuItem>

            <MenuItem value="522">الوسم</MenuItem>

            <MenuItem value="523">سيدة العتمة</MenuItem>

            <MenuItem value="524">تحقيق</MenuItem>

            <MenuItem value="525">منورة باهلها</MenuItem>

            <MenuItem value="526">رقصة مطر</MenuItem>

            <MenuItem value="527">سوشيال</MenuItem>

            <MenuItem value="529">المشوار</MenuItem>

            <MenuItem value="530">الاختيار 3</MenuItem>

            <MenuItem value="531">مع وقف التنفيذ</MenuItem>

            <MenuItem value="532">.ظل</MenuItem>

            <MenuItem value="533">للموت 2</MenuItem>

            <MenuItem value="534">رامز موفي ستار</MenuItem>

            <MenuItem value="535">كسرعضم</MenuItem>

            <MenuItem value="536">بقعة ضوء 2022</MenuItem>

            <MenuItem value="537">جوقة عزيزة</MenuItem>

            <MenuItem value="538">توبة</MenuItem>

            <MenuItem value="539">يوتيرن</MenuItem>

            <MenuItem value="540">رانيا وسكينة</MenuItem>

            <MenuItem value="541">عودة الاب الضال</MenuItem>

            <MenuItem value="542">ناطحة سحاب</MenuItem>

            <MenuItem value="543">حارة القبة 2</MenuItem>

            <MenuItem value="544"> ما بين حب و حب</MenuItem>

            <MenuItem value="545">بروكار 2</MenuItem>

            <MenuItem value="546">2 امينة حاف</MenuItem>

            <MenuItem value="547">العائدون</MenuItem>

            <MenuItem value="548">دايما عامر</MenuItem>

            <MenuItem value="549">بابلو</MenuItem>

            <MenuItem value="550">كندوش الجزء الثاني</MenuItem>

            <MenuItem value="551">فاتن امل حربي</MenuItem>

            <MenuItem value="552">دنيا تانية</MenuItem>

            <MenuItem value="553">مين قال</MenuItem>

            <MenuItem value="554">الدحيح</MenuItem>

            <MenuItem value="555">من شارع الهرم الي</MenuItem>

            <MenuItem value="556">مكتوب عليا</MenuItem>

            <MenuItem value="557">الصدمة 4</MenuItem>

            <MenuItem value="558">احلام سعيدة</MenuItem>

            <MenuItem value="559">وجوه</MenuItem>

            <MenuItem value="560">الكبير اوي</MenuItem>

            <MenuItem value="561">بيت الشدة</MenuItem>

            <MenuItem value="562">النقطة العامية</MenuItem>

            <MenuItem value="563">العاصوف 3</MenuItem>

            <MenuItem value="564">بطلوع الروح</MenuItem>

            <MenuItem value="565">الوسم 2</MenuItem>

            <MenuItem value="566">الانسة فرح</MenuItem>

            <MenuItem value="567">حوبتي</MenuItem>

            <MenuItem value="568">في الحب والحياة</MenuItem>

            <MenuItem value="569">طلعت روحي</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {/* Select3 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Audio Packages</InputLabel>

          <Select
            label="Audio Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem value="1">Arabic</MenuItem>

            <MenuItem value="5">TOP RADIO</MenuItem>

            <MenuItem value="6">Turkish</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {/* Select4 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            Live TV Packages
          </InputLabel>

          <Select
            label="Live TV Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem value="1">OSN TEST</MenuItem>

            <MenuItem value="7">KURDISH</MenuItem>

            <MenuItem value="6">AFRICAN</MenuItem>

            <MenuItem value="2">ARABIC</MenuItem>

            <MenuItem value="4">SPORTS</MenuItem>

            <MenuItem value="9">KIDS</MenuItem>

            <MenuItem value="10">NEWS</MenuItem>

            <MenuItem value="11">RELIGION</MenuItem>

            <MenuItem value="8">MUSIC</MenuItem>

            <MenuItem value="3">TURKISH</MenuItem>

            <MenuItem value="5">IRAQ</MenuItem>

            <MenuItem value="16">MAGHREB</MenuItem>

            <MenuItem value="17">GERMAN</MenuItem>

            <MenuItem value="22">FRANCE</MenuItem>

            <MenuItem value="49">HD channels</MenuItem>

            <MenuItem value="41">Farsi</MenuItem>

            <MenuItem value="43">Important</MenuItem>

            <MenuItem value="44">Problem</MenuItem>

            <MenuItem value="45">AFGHANISTAN</MenuItem>

            <MenuItem value="47">Christian</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {/* Select5 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            VideoLive TV Packages
          </InputLabel>

          <Select
            label="VideoLive TV Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem value="28">TS-ARABIC</MenuItem>

            <MenuItem value="30">FARSI</MenuItem>

            <MenuItem value="31">خرزة زرقا</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {/* Select6 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Shows Packages</InputLabel>

          <Select
            label="Shows Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            {/* <MenuItem ></MenuItem> */}
            {show_categories.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.title}
              </MenuItem>
            ))}
            {/* <MenuItem value="172">إسلاميات</MenuItem>

            <MenuItem value="173">طبخ</MenuItem>

            <MenuItem value="174">ترفيه</MenuItem>

            <MenuItem value="175">صحة وجمال</MenuItem>

            <MenuItem value="180">ers</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {/* Select7 */}

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Songs Packages</InputLabel>

          <Select
            label="Songs Packages"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            {song_categories.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.title}
              </MenuItem>
            ))}

            {/* <MenuItem value="29">Arabic</MenuItem>

<MenuItem value="30">Pop</MenuItem>

            {/* Add more language MenuItems as needed */}
          </Select>
        </FormControl>

        {validationError && (
<div style={{ color: 'red' }}>
            {validationError.map((error) => (
<div>{error.message}</div>
            ))}
</div>
      )}

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button type="reset" onClick={handleReset}>
            Reset
          </Button>

          <Button type="submit">Submit</Button>
        </ButtonGroup>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Addpackage;
