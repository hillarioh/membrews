import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserDetails } from "@/types/user-details";

interface StatisticCardProps {
  data: UserDetails[];
}

export function StatisticCard({ data }: StatisticCardProps) {
  const adminCount = data.filter((d) => d.role === "admin").length;
  const memberCount = data.filter((d) => d.role === "member").length;
  const totalCount = data.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{totalCount}</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Members</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{memberCount}</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{adminCount}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatisticCard;
