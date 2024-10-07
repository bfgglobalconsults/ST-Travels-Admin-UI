import { newsData } from "@/data/News";
import { Href, ImagePath } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";

const AllNewsDetails = () => {
  return (
    <tbody>
      {newsData.map((data, index) => (
        <tr key={index}>
          <td>
            <span>
              <Image
                src={`${ImagePath}/tours/${index + 1}.jpg`}
                height={45}
                width={70}
                alt="users"
              />
            </span>
          </td>
          <td>
            <a href={Href}>{data.title}</a>
          </td>
          <td>{data.author}</td>
          <td>{data.date}</td>
          <td>
            <Link href="/news/newsdetail">
              <i className="fa fa-eye" />
            </Link>
          </td>
          <td>
            <a href={Href}>
              <i className="fa fa-pencil-square-o" />
            </a>
          </td>
          <td>
            <a href={Href}>
              <i className="fa fa-trash-o" />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AllNewsDetails;
