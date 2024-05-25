import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { TableBody, Table, TableRow, TableCell } from "./ui/table";
import { Button } from "./ui/button";
import { IconPlus } from "@tabler/icons-react";

export function CommentSection({ show }: { show: boolean }) {
  return (
    <div className="w-full my-2">
      {show && (
        <>
          <Table className="my-2">
            <TableBody>
              <TableRow className="flex gap-2">
                <TableCell>
                  <Avatar>
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Fri May 24 2024 16:56:51
                    </p>
                    <p>Grzanie dziś dobre</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <form>
            <div className="w-full flex flex-row items-center gap-6">
              <Input
                placeholder="Add comment ..."
                id="comment"
                name="comment"
              />
              <Button variant="ghost" size="icon">
                <IconPlus />
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
