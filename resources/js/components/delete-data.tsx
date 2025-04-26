import { Button } from '@/components/ui/button';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from '@/components/ui/dialog';
interface DeleteDataProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}
export default function DeleteData({ isOpen, onClose, onConfirm }: DeleteDataProps) {
    return (
        <div className="space-y-6">
            <Dialog open={isOpen} onOpenChange={onClose}>
                {/* <DialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
                    </DialogTrigger> */}
                <DialogContent>
                    <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                    <DialogDescription>
                        Once your account is deleted, all of its resources and data will also be permanently deleted.
                    </DialogDescription>
                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" className="cursor-pointer" type="button">
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button variant="destructive" asChild>
                            <button onClick={onConfirm} className="cursor-pointer" type="submit">
                                Delete
                            </button>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
