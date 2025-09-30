import type { Request, Response } from "express";

class HealthController {
    public async handleHealthCheck(_: Request, res: Response): Promise<void> {
        try {
            const dbStatus = "ok"; // replace with actual db ping logic
            const uptime = process.uptime();

            res.status(200).json({
                success: true,
                message: "Server is healthy 🚀",
                data: {
                    uptime: `${Math.floor(uptime)}s`,
                    timestamp: new Date().toISOString(),
                    dependencies: {
                        dbStatus: dbStatus,
                    },
                },
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                status: "error",
                message: "Health check failed",
                error: (error as Error).message,
            });
        }
    }
}

export default HealthController;
