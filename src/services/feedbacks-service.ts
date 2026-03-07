import { httpAdapter } from "../lib/adapter";
import { BaseService } from "./base-service";

// BE -> BaseEndpoint
const feedbacksBE = "/feedback"
// const salesBE = "/sales"

interface Feedback {
    feedback: string,
    rating: number
}

interface FeedbacksResponse {
    feedbacks: Feedback[],
    totalCount: number,
    totalPages: number,
    currentPage: number,
}

interface FeedbackResponse {
    message: string,
    feedback: {
        id: string,
        name: string,
        description: string,
        rating: number
        createdAt: string,
        updatedAt: string
    }
}

export class FeedbacksService extends BaseService {

    async getFeedbacks(): Promise<FeedbacksResponse> {
        const response = await this.execute<null, FeedbacksResponse>({
            method: "GET",
            url: feedbacksBE,
        });

        return response.data;
    }

    async postFeedbacks({ feedback, rating }: Feedback): Promise<Feedback> {
        const response = await this.execute<Feedback, FeedbackResponse>({
            data: {
                feedback,
                rating
            },
            method: "POST",
            url: feedbacksBE,
        })

        return response.data;
    }
}

export const feedbacksService = new FeedbacksService(httpAdapter);
