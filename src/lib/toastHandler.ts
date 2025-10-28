import { toast } from 'sonner'

const sanitizeErrorMessage = (msg: string) => {
    if (msg.includes('duplicate key')) return 'This email is already registered.'
    if (msg.toLowerCase().includes('network')) return 'Network error. Please try again.'
    return 'Something went wrong. Please try again.'
}

export const showErrorToast = (title: string, error?: unknown) => {
    const message =
        error instanceof Error
            ? sanitizeErrorMessage(error.message)
            : 'Something went wrong. Please try again.'

    toast.error(title, { description: message })
}

export const showSuccessToast = (title: string, description?: string) => {
    toast.success(title, { description })
}

export const showInfoToast = (title: string, description?: string) => {
    toast.info(title, { description })
}
