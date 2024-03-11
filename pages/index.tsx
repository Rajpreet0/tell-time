import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import HeroDashboard from "@/components/HeroDashboard";
import TimeComponentDashboard from "@/components/TimeComponentDashboard";
import VacationComponentDashboard from "@/components/VacationComponentDashboard";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if(!session) {
      return {
          redirect: {
              destination: "/auth",
              permanent: false,
          },
      };
  }

  return {
      props: {},
  };
}

export default function Home() {
  return (
    <>
      <div className="flex flex-row h-full">
        <Sidebar/>
        <div className="p-6 w-full flex flex-col">
          <HeroDashboard/>
          <div className="flex flex-row gap-4">
            <TimeComponentDashboard/>
            <VacationComponentDashboard/>
          </div>
        </div>
      </div>
    </>
  )
}
