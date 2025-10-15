import connectToDatabase from "@/lib/mongodb";
import Todo from "@/models/Todo.model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase()
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        return NextResponse.json(todos)
    } catch (error) {
        NextResponse.json(
            { error: "Failed to fetch todos" },
            { status: 500 },
        )
    }
}

export async function POST(request) {
    try {
        const body = await request.json()
        const { title } = body

        if (!title) {
            return NextResponse.json(
                { error: "title is required" },
                {status: 400}
            )
        }

        await connectToDatabase();
        const todo = await Todo.create({
            title
        })

        return NextResponse.json(todo, {status: 201})
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create todo" },
            {status: 500}
        )
    }
}



