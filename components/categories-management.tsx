"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCategory } from "@/hooks/category_hooks";
import { TCCategory } from "@/types";
import { ZCCategory } from "@/validators/category";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BookOpen,
  Clock,
  Edit,
  Heart,
  MessageSquare,
  Plus,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

// Dummy categories data
const dummyCategories = [
  {
    id: 1,
    name: "কুরআন ও তাফসীর",
    description: "পবিত্র কুরআনের আয়াত ও তাফসীর",
    postCount: 25,
    icon: "BookOpen",
  },
  {
    id: 2,
    name: "হাদিস শরীফ",
    description: "রাসূল (সা.) এর পবিত্র হাদিস",
    postCount: 30,
    icon: "MessageSquare",
  },
  {
    id: 3,
    name: "ইসলামিক ইতিহাস",
    description: "সাহাবা ও মনীষীদের জীবনী",
    postCount: 20,
    icon: "Clock",
  },
  {
    id: 4,
    name: "ইবাদত ও আমল",
    description: "নামাজ, রোজা, হজ ও যাকাত",
    postCount: 35,
    icon: "Heart",
  },
  {
    id: 5,
    name: "দোয়া ও যিকির",
    description: "দৈনন্দিন দোয়া ও আল্লাহর যিকির",
    postCount: 15,
    icon: "Star",
  },
  {
    id: 6,
    name: "ইসলামিক জীবনযাত্রা",
    description: "ইসলামিক নীতিমালা ও জীবনযাত্রা",
    postCount: 18,
    icon: "Users",
  },
];

const iconMap = {
  BookOpen,
  MessageSquare,
  Clock,
  Users,
  Heart,
  Star,
};

export function CategoriesManagement() {
  const [categories, setCategories] = useState(dummyCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<TCCategory | any>(null);
  const createCategory = useCreateCategory();

  const form = useForm<TCCategory>({
    resolver: zodResolver(ZCCategory),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleSubmit = (data: any) => {
    try {
      if (editingCategory) {
        toast.info("ক্যাটেগরি আপডেট ফিচারটি এখনও উপলব্ধ নয়");
      } else {
        createCategory.mutate(data, {
          onSuccess: (data) => {
            console.log(data);
            toast.success("ক্যাটেগরি সফলভাবে তৈরি হয়েছে");
            setIsDialogOpen(false);
            form.reset();
          },
          onError: (error) => {
            console.log(error);
            toast.error("ক্যাটেগরি তৈরি ব্যর্থ হয়েছে");
          },
        });
      }
    } catch (error) {
      toast.error("ক্যাটেগরি তৈরি ব্যর্থ হয়েছে");
    }
    console.log(data, "fommmmmmmmmmmmmmmmmmmmmmmmmmmm");
  };

  const handleEdit = (category: any) => {
    setIsDialogOpen(true);
  };

  const handleDelete = (categoryId: number) => {
    setCategories(categories.filter((cat) => cat.id !== categoryId));
  };

  const handleOpenDialog = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      form.reset({ name: "", description: "" });
      setEditingCategory(null);
    } else {
      if (!editingCategory) {
        form.reset({ name: "", description: "" });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">ক্যাটেগরি ব্যবস্থাপনা</h1>
          <p className="text-muted-foreground">
            আপনার ব্লগের ক্যাটেগরিসমূহ পরিচালনা করুন
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={handleOpenDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingCategory(null)}>
              <Plus className="mr-2 h-4 w-4" />
              নতুন ক্যাটেগরি
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? "ক্যাটেগরি সম্পাদনা" : "নতুন ক্যাটেগরি" }

              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ক্যাটেগরির নাম</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>বিবরণ</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    type="submit"
                    disabled={createCategory.isPending}
                  >
                    {createCategory.isPending
                      ? "লোড হচ্ছে..."
                      : editingCategory
                      ? "আপডেট করুন"
                      : "তৈরি করুন"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    বাতিল
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>সব ক্যাটেগরি ({categories.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>আইকন</TableHead>
                <TableHead>নাম</TableHead>
                <TableHead>বিবরণ</TableHead>
                <TableHead>পোস্ট সংখ্যা</TableHead>
                <TableHead className="w-[100px]">কার্যক্রম</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => {
                const IconComponent =
                  iconMap[category.icon as keyof typeof iconMap];
                return (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="p-2 rounded-lg bg-muted w-fit">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {category.name}
                    </TableCell>
                    <TableCell className="text-balance">
                      {category.description}
                    </TableCell>
                    <TableCell>{category.postCount}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(category)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(category.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
