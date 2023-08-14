import { Parent } from "@/components/Parent";
import NavProfile from "@/components/NavProfile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useReadingList from "@/hooks/useReadingLater";
import Card from "@/components/Card";
import Loader from "@/components/Loader";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
export default function ReadingList() {
  const { GetList } = useReadingList();
  console.log(GetList)
  


  return (
    <>
      <Parent>
        <NavProfile/>

        {!GetList?(
          <Loader/>
        ):(
          <ul className="cards  ">
              <>
                {GetList.map((item, index) => (
                  <Card key={index} item={item} isReadingList={true} />
                ))}
              </>
           
          </ul>

        )}

        

      </Parent>
    </>
  )
}