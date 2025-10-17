"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import InputForm from "../InputForm";
import Image from "next/image";

// ✅ Define Zod schema
const teacherSchema = z.object({
  username: z.string().min(6, "Username must be at least 6 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  about: z.string().optional(),
  phone: z
    .string()
    .regex(/^\d{10,}$/, "Phone number must contain at least 10 digits."),
  photo: z
    .any()
    .refine(
      (files) => files instanceof FileList && files.length > 0,
      "Photo is required."
    )
    .refine(
      (files) =>
        files instanceof FileList &&
        files.length > 0 &&
        ["image/jpeg", "image/png", "image/webp"].includes(files[0].type),
      "Only JPEG, PNG, or WEBP images are allowed."
    ),
  birthday: z
    .string()
    .min(1, { message: "Birthdate is required" })
    .refine((val) => !isNaN(Date.parse(val)), "Must be a valid date"),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  address: z.string().min(5, "Address is required."),
});

// ✅ Infer TypeScript type
type TeacherFormValues = z.infer<typeof teacherSchema>;

export default function TeacherForm({
  type,
  data,
}: {
  type: "plus" | "edit";
  data?: TeacherFormValues;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TeacherFormValues>({
    resolver: zodResolver(teacherSchema),
    // defaultValues: data,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  // Watch the file input for changes
  const photo = watch("photo");

  // Update preview whenever the user selects a new file
  useEffect(() => {
    if (photo && photo instanceof FileList && photo.length > 0) {
      const file = photo[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // Cleanup memory when component unmounts or photo changes
      return () => URL.revokeObjectURL(imageUrl);
    }
  }, [photo]);
  //   const handlefileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       const imageUrl = URL.createObjectURL(file);
  //       setPreview(imageUrl);
  //     }
  //   };
  return (
    <div>
      <h1 className="text-xl font-bold ">
        {type === "edit" ? "Update Teacher" : "Create A New Teacher"}{" "}
      </h1>
      <form onSubmit={onSubmit} className="max-h-[700px] overflow-y-auto">
        <div className="flex flex-col gap-5 py-5 ">
          <p className="text-gray-500 font-semibold">Authentication</p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <InputForm
              type={"text"}
              label="Username"
              register={register("username")}
              defaultValue={type === "edit" && data ? data.username : ""}
              error={errors.username}
            />
            <InputForm
              type="email"
              label="Email"
              register={register("email")}
              defaultValue={type === "edit" && data ? data.email : ""}
              error={errors.email}
            />

            {type === "plus" && (
              <InputForm
                type={"password"}
                label="Password"
                register={register("password")}
                error={errors.password}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5">
          <p className="text-gray-500 font-semibold">Personal Information</p>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <InputForm
              type={"text"}
              label="First Name"
              register={register("firstName")}
              defaultValue={type === "edit" && data ? data.firstName : ""}
              error={errors.firstName}
            />
            <InputForm
              type={"text"}
              label="Last Name"
              register={register("lastName")}
              defaultValue={type === "edit" && data ? data.lastName : ""}
              error={errors.lastName}
            />

            <InputForm
              type={"text"}
              label="Phone"
              register={register("phone")}
              defaultValue={type === "edit" && data ? data.phone : ""}
              error={errors.phone}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <InputForm
              type={"text"}
              label="Address"
              register={register("address")}
              defaultValue={type === "edit" && data ? data.address : ""}
              error={errors.address}
            />

            <InputForm
              type={"date"}
              label="Birthday"
              register={register("birthday")}
              defaultValue={type === "edit" && data ? data.birthday : ""}
              error={errors.birthday}
            />
            <div className="w-full flex flex-col gap-2 ">
              <label className="text-xs text-gray-500 font-semibold">Sex</label>
              <select
                className="outline-none border-2 border-gray-200 py-1 rounded-md text-xs"
                {...register("sex")}
                defaultValue={data?.sex}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              {errors.sex?.message && (
                <p className="text-red-400 text-xs">
                  {errors.sex?.message.toString()}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-xs text-gray-500 font-semibold">About</label>
            <textarea
              {...register("about")}
              className="outline-none border-2 border-gray-200 py-1 rounded-md text-xs"
              defaultValue={data?.about}
              rows={10}
            ></textarea>
          </div>
          <div className="flex items-center  gap-5">
            <div className="w-fit h-fit flex flex-col gap-2  border rounded-md">
              <label
                className="text-xs text-gray-500 font-semibold flex items-center p-4  gap-3 cursor-pointer"
                htmlFor="fileUpload"
              >
                <Image src="/upload.png" alt="" width={34} height={34} />
                <span>Upload a photo</span>
              </label>
              <input
                type="file"
                id="fileUpload"
                {...register("photo")}
                className="hidden"
              />
              {errors.sex?.message && (
                <p className="text-red-400 text-xs">
                  {errors.sex?.message.toString()}
                </p>
              )}
            </div>
            <Image
              src={preview ? preview : "/avatar.png"}
              alt="Upload Image"
              width={14}
              height={14}
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
        </div>
        <button className="w-fit bg-blue-500 text-sm py-2 px-5 rounded-md text-white">
          {type === "plus" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}
