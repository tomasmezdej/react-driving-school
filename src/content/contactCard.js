import { FaFacebook } from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';

const iconSize = 40

export const info = {
  title: "Contact us",
  subtitle: "Feel free to contact us anytime. We will get back to you ass soon as we can.",
  address: {
    city: "NW Bobcat Lane",
    street: "St. Robert, MO 65584-5678",
    phone: "+7 903 666-74-79",
    email: "zuevauto@gmail.com",
    ico: "xx yyy zzz"
  },
  facebook: {
    site: "Facebook",
    icon: <FaFacebook size={iconSize} style={{"color": "#4267B2"}} />,
    description: "",
    link: "",
  },
  instagram: {
    site: "Instagram",
    icon: <BsInstagram size={iconSize} style={{
              "color": "white",
              padding: "3px",
              borderRadius: "5px",
              "background": "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)"
            }}
          />,
    description: "",
    link: "",
  }

}