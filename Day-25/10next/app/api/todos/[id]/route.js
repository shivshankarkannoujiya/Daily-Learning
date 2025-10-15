import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Todo from "@/models/Todo.model";

export async function GET(request, context) {
    try {
        const { id } = await context.params;
        await connectToDatabase();

        const todo = await Todo.findById(id)
        if (!todo) {
            return NextResponse.json(
                { error: "todo not found" },
                {status: 404}
            )
        }

        return NextResponse.json(
            { success: true, data: todo },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch todo" },
            {status: 500}
        )
    }
}