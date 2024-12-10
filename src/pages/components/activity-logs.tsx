"use client"

import { useState, useEffect } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Car } from "lucide-react"

type Log = {
    id: string,
    name: string,
    email: string,
    activity: string,
    profile: {
      avatar: string
    },
    dateOfBirth: string
}

const ActivityLogs = () => {
    const [logs, setLogs] = useState<Log[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const getLogs = async () => {
        return [
            {
              id: "728ed52f",
              name: "Jane Doe",
              email: "jane@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1990-01-01",
            },
            {
              id: "728ed530",
              name: "John Smith",
              email: "john@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1985-05-15",
            },
            {
              id: "728ed531",
              name: "Alice Johnson",
              email: "alice@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1992-07-21",
            },
            {
              id: "728ed532",
              name: "Bob Brown",
              email: "bob@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1988-11-30",
            },
            {
              id: "728ed533",
              name: "Charlie Davis",
              email: "charlie@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1995-03-12",
            },
            {
              id: "728ed534",
              name: "Diana Evans",
              email: "diana@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1991-08-25",
            },
            {
              id: "728ed535",
              name: "Eve Foster",
              email: "eve@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1989-12-05",
            },
            {
              id: "728ed536",
              name: "Frank Green",
              email: "frank@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1993-04-18",
            },
            {
              id: "728ed537",
              name: "Grace Harris",
              email: "grace@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1994-09-09",
            },
            {
              id: "728ed538",
              name: "Henry Jackson",
              email: "henry@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1987-02-22",
            },
            {
              id: "728ed539",
              name: "Ivy King",
              email: "ivy@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1996-06-14",
            },
            {
              id: "728ed53a",
              name: "Jack Lee",
              email: "jack@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1990-10-10",
            },
            {
              id: "728ed53b",
              name: "Kathy Miller",
              email: "kathy@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1990-12-12",
            },
            {
              id: "728ed53c",
              name: "Leo Nelson",
              email: "leo@gmail.com",
              activity: "user logged out",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1991-11-11",
            },
            {
              id: "728ed53d",
              name: "Mia Owens",
              email: "mia@gmail.com",
              activity: "user logged in",
              profile: {
                avatar: "https://api.dicebear.com/9.x/avataaars/svg"
              },
              dateOfBirth: "1993-03-03",
            },
          ]
    }

    useEffect(() => {
        getLogs()
        .then((logs) => {
            setLogs(logs)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            setLoading(false)
        })
    }, [])

    return (
        < Card>
            <CardHeader>
                <CardTitle className="h-4 pt-4 text-start">Activity Logs</CardTitle>
                <CardDescription className="h-12"></CardDescription>
            </CardHeader>
            <CardContent className="h-64 overflow-y-auto">
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    
      {logs.map((log: Log) => (
        <div key={log.id} className="my-4">

            <div className="flex items-center gap-2 pb-4">
                <img
                className="h-8 w-8 rounded-full"
                src={log.profile.avatar}
                alt={log.name}
                />
                <div>
                <p className="font-semibold">{log.name}</p>
                <p className="text-sm text-gray-500">{log.activity}</p>
                </div>
                </div>
          <div className="bg-gray-300 h-[1.3px] w-full mx-auto"></div>
        </div>
        
      ))}
    
  </CardContent>
        </Card>
        
    )
};

export default ActivityLogs