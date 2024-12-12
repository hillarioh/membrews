import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./components/data-table";
import MembershipChart from "./components/chart";
import StatisticCard from "./components/statistics";
import ActivityLogs from "./components/activity-logs";
import { Navigate } from "react-router";
import { UserDetails } from "@/types/user-details";
import { useAuth } from "@/context";
import { getUsers } from "@/utils/api";

const columns: ColumnDef<{
  id: string;
  name: string;
  email: string;
  role: string;
  profile: { avatar: string };
  dateOfBirth: string;
}>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "profile.avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <img
        src={row.original.profile.avatar}
        alt="avatar"
        width={50}
        height={50}
      />
    ),
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
];

const Dashboard = () => {
  const { isAuthenticated, token } = useAuth();
  const [users, setUsers] = useState<UserDetails[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers(token || "");
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Dashboard - Member Management";
    fetchUsers();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col gap-8 p-12">
      <StatisticCard data={users} />
      <div className="flex gap-x-4">
        <div className="w-3/4">
          <MembershipChart />
        </div>
        <div className="w-1/4">
          <ActivityLogs />
        </div>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Dashboard;
