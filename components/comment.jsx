import "./style.css"
import "./responsive.css"

import { Input, Button } from "reactstrap"

import Image from "next/image"


import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';






const Comment = () => {


    return (

        <div className="comment_section_base">

            <span style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span className="main_screen_heading comment_heading" style={{ width: "100%" }} >Don't see the answer you were looking for? Post your Questions</span>
                <br />
                <span className="comment_screen_sub_head">Your questions might be answered by the host, speakers or GoSocial team</span>
            </span>


            <span className="comment_screen_bottom">



                <PerfectScrollbar className="comments_scrollbar" style={{ overflow: "scroll" }}>


                    <span className="comment_box">

                        <span className="comment_user_info">

                            <span className="comment_name_pic_span">
                                <Image width={30} height={30} className="comment_user_pic" src="/person.jpg"></Image>
                                amyrobson
                            </span>

                            <span className="comment_time max_lines1">
                                1 month ago
                            </span>

                        </span>

                        <span className="comment_msg max_lines2">Lorem ipsum dolor signi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum eos culpa beatae, a velit, nemo eligendi reprehenderit nobis provident odio ducimus recusandae asperiores laboriosam iusto ipsum, optio sunt dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste similique eum porro amet! Pariatur, distinctio accusantium! Dolorem placeat consectetur unde asperiores ipsa enim quia voluptate ipsam magni, dolor omnis vitae.</span>

                    </span>


                    <span className="comment_box">

                        <span className="comment_user_info">

                            <span className="comment_name_pic_span">
                                <Image width={30} height={30} className="comment_user_pic" src="/person.jpg"></Image>
                                amyrobson
                            </span>

                            <span className="comment_time max_lines1">
                                1 month ago
                            </span>

                        </span>

                        <span className="comment_msg max_lines2">Lorem ipsum dolor signi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum eos culpa beatae, a velit, nemo eligendi reprehenderit nobis provident odio ducimus recusandae asperiores laboriosam iusto ipsum, optio sunt dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste similique eum porro amet! Pariatur, distinctio accusantium! Dolorem placeat consectetur unde asperiores ipsa enim quia voluptate ipsam magni, dolor omnis vitae.</span>

                    </span>



                    <span className="comment_box">

                        <span className="comment_user_info">

                            <span className="comment_name_pic_span">
                                <Image width={30} height={30} className="comment_user_pic" src="/person.jpg"></Image>
                                amyrobson
                            </span>

                            <span className="comment_time max_lines1">
                                1 month ago
                            </span>

                        </span>

                        <span className="comment_msg max_lines2">Lorem ipsum dolor signi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum eos culpa beatae, a velit, nemo eligendi reprehenderit nobis provident odio ducimus recusandae asperiores laboriosam iusto ipsum, optio sunt dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste similique eum porro amet! Pariatur, distinctio accusantium! Dolorem placeat consectetur unde asperiores ipsa enim quia voluptate ipsam magni, dolor omnis vitae.</span>

                    </span>




                    <span className="comment_box">

                        <span className="comment_user_info">

                            <span className="comment_name_pic_span">
                                <Image width={30} height={30} className="comment_user_pic" src="/person.jpg"></Image>
                                amyrobson
                            </span>

                            <span className="comment_time max_lines1">
                                1 month ago
                            </span>

                        </span>

                        <span className="comment_msg max_lines2">Lorem ipsum dolor signi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum eos culpa beatae, a velit, nemo eligendi reprehenderit nobis provident odio ducimus recusandae asperiores laboriosam iusto ipsum, optio sunt dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste similique eum porro amet! Pariatur, distinctio accusantium! Dolorem placeat consectetur unde asperiores ipsa enim quia voluptate ipsam magni, dolor omnis vitae.</span>

                    </span>




                </PerfectScrollbar>



                <span className="comment_write_area">

                    <Input className="comment_textarea" type="textarea" placeholder="Add a comment use @ to tag people" ></Input>



                    <span className="comment_write_bottom">
                        <Image className="comment_user_pic" width={30} height={30} src="/person.jpg"></Image>
                        <Button color="secondary" className="comment_post_btn" size="md" >Comment</Button>


                    </span>


                </span>





            </span>



        </div>

    )
}



export default Comment