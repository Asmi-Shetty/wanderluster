
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wallet, Plus, UserPlus, DollarSign, PieChart, ListChecks, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExpensePage = () => {
  const { toast } = useToast();
  
  // Sample data
  const [groups] = useState([
    { 
      id: 1, 
      name: "Europe Trip 2023", 
      members: ["You", "John", "Sarah", "Mike"],
      totalExpenses: 4850,
      currency: "USD",
      expenses: [
        { id: 1, description: "Hotel in Paris", amount: 1200, paidBy: "You", date: "June 12, 2023" },
        { id: 2, description: "Dinner in Rome", amount: 240, paidBy: "Sarah", date: "June 15, 2023" },
        { id: 3, description: "Train tickets", amount: 180, paidBy: "Mike", date: "June 16, 2023" },
        { id: 4, description: "Museum passes", amount: 120, paidBy: "John", date: "June 17, 2023" },
        { id: 5, description: "Barcelona apartment", amount: 950, paidBy: "You", date: "June 20, 2023" },
      ],
      balances: [
        { member: "You", balance: 425 },
        { member: "John", balance: -320 },
        { member: "Sarah", balance: 120 },
        { member: "Mike", balance: -225 },
      ]
    },
    { 
      id: 2, 
      name: "Tokyo Trip Planning", 
      members: ["You", "Alex", "Emma"],
      totalExpenses: 0,
      currency: "USD",
      expenses: [],
      balances: [
        { member: "You", balance: 0 },
        { member: "Alex", balance: 0 },
        { member: "Emma", balance: 0 },
      ]
    }
  ]);
  
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  
  // Handle adding expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Expense added",
      description: "Your expense has been added to the group"
    });
  };
  
  // Handle create group
  const handleCreateGroup = () => {
    toast({
      title: "New group created",
      description: "You can now start adding expenses to your group"
    });
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">
                <Wallet className="inline-block mr-2 mb-1" /> Trip Expenses
              </h1>
              <p className="text-white/80 mt-2">Split expenses with your travel companions</p>
            </div>
            
            <Button onClick={handleCreateGroup}>
              <Plus className="mr-2 h-4 w-4" /> New Group
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-glass mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Your Groups</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-1">
                    {groups.map((group) => (
                      <div
                        key={group.id}
                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-white/20 dark:hover:bg-gray-800/20 ${
                          selectedGroup.id === group.id ? "bg-white/20 dark:bg-gray-800/20" : ""
                        }`}
                        onClick={() => setSelectedGroup(group)}
                      >
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{group.name}</span>
                        </div>
                        <span className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                          {group.members.length}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Add Expense Form */}
              <Card className="bg-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Add Expense</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddExpense} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="e.g., Dinner in Paris" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input id="amount" type="number" placeholder="0.00" className="pl-9" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paidBy">Paid By</Label>
                      <Select defaultValue="you">
                        <SelectTrigger>
                          <SelectValue placeholder="Select who paid" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedGroup.members.map((member) => (
                            <SelectItem key={member} value={member.toLowerCase()}>{member}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="splitWith">Split With</Label>
                      <Select defaultValue="equally">
                        <SelectTrigger>
                          <SelectValue placeholder="Select how to split" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equally">Split Equally</SelectItem>
                          <SelectItem value="percentage">By Percentage</SelectItem>
                          <SelectItem value="exact">Exact Amounts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">Add Expense</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-glass">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{selectedGroup.name}</CardTitle>
                  <Button variant="outline" size="sm">
                    <UserPlus className="h-4 w-4 mr-2" /> Invite
                  </Button>
                </CardHeader>
                <CardContent>
                  {/* Group Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Total Expenses</div>
                      <div className="text-2xl font-bold">${selectedGroup.totalExpenses}</div>
                    </div>
                    <div className="bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Members</div>
                      <div className="text-2xl font-bold">{selectedGroup.members.length}</div>
                    </div>
                    <div className="bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Currency</div>
                      <div className="text-2xl font-bold">{selectedGroup.currency}</div>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="expenses">
                    <TabsList className="bg-white/20 dark:bg-gray-800/20 mb-6">
                      <TabsTrigger value="expenses">
                        <ListChecks className="h-4 w-4 mr-2" /> Expenses
                      </TabsTrigger>
                      <TabsTrigger value="balances">
                        <PieChart className="h-4 w-4 mr-2" /> Balances
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="expenses">
                      {selectedGroup.expenses.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left py-3 px-4">Description</th>
                                <th className="text-left py-3 px-4">Amount</th>
                                <th className="text-left py-3 px-4">Paid By</th>
                                <th className="text-left py-3 px-4">Date</th>
                                <th className="text-right py-3 px-4">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedGroup.expenses.map((expense) => (
                                <tr key={expense.id} className="border-b border-gray-200 dark:border-gray-700">
                                  <td className="py-3 px-4">{expense.description}</td>
                                  <td className="py-3 px-4">${expense.amount}</td>
                                  <td className="py-3 px-4">{expense.paidBy}</td>
                                  <td className="py-3 px-4">{expense.date}</td>
                                  <td className="py-3 px-4 text-right">
                                    <Button variant="ghost" size="sm">Edit</Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 dark:text-gray-400 mb-4">No expenses yet</p>
                          <p className="text-sm max-w-md mx-auto mb-4">
                            Add your first expense to start tracking and splitting costs with your group.
                          </p>
                          <Button>Add an Expense</Button>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="balances">
                      <h3 className="text-lg font-semibold mb-4">Who Owes What</h3>
                      <div className="space-y-3">
                        {selectedGroup.balances.map((balance, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white/20 dark:bg-gray-800/20 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-travel-teal/10 rounded-full flex items-center justify-center mr-3">
                                {balance.member.charAt(0)}
                              </div>
                              <span>{balance.member}</span>
                            </div>
                            <div className={balance.balance > 0 ? "text-green-600 dark:text-green-400" : balance.balance < 0 ? "text-red-600 dark:text-red-400" : ""}>
                              {balance.balance > 0 ? "+" : ""}{balance.balance}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {selectedGroup.balances.some(b => b.balance !== 0) && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold mb-4">Suggested Settlements</h3>
                          <div className="space-y-3">
                            <div className="p-3 bg-white/20 dark:bg-gray-800/20 rounded-lg">
                              <p>John owes You <span className="font-semibold">$320</span></p>
                            </div>
                            <div className="p-3 bg-white/20 dark:bg-gray-800/20 rounded-lg">
                              <p>Mike owes You <span className="font-semibold">$225</span></p>
                            </div>
                            <div className="p-3 bg-white/20 dark:bg-gray-800/20 rounded-lg">
                              <p>You owe Sarah <span className="font-semibold">$120</span></p>
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpensePage;
